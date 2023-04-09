import {createContext, useState, useEffect} from 'react'

export const Contexto = createContext()


const random = Math.floor(Math.random()*50+1)
console.log(random)

const urlPokemones="https://pokeapi.co/api/v2/pokemon/?limit="+random

export function ContextoProvider(props){

    const listaPokemones = []
    const [pokemones, setPokemones] = useState([])
    const [favoritos, setFavoritos] = useState([])

    const [tareas, setTareas] = useState([]);
    const [texto, setTexto] = useState("");
    const [estado, setEstado] = useState(false);
    const [hechas, setHechas] = useState(0);

  function crearTareas(tarea) {
    const input = document.getElementById("input").value;
  
    if (input !== "") {
            setTareas([
            ...tareas,
            {
              id: tareas.length,
              texto: tarea.texto,
              estado: tarea.estado,
            },
          ]);
        }
      }


  function cambiarFondo(tareaId, indice) {
    const tarea = document.getElementById(`tarea${tareaId}`);
      
      if(tarea.classList.contains("bg-danger") && tareas[indice].id===tareaId){
        
        setHechas(hechas + 1)
        tarea.classList.remove("bg-danger")
        tarea.classList.add("bg-success")
      }else if (tarea.classList.contains("bg-success") && tareas[indice].id===tareaId){
        setHechas(hechas - 1);
        tarea.classList.add("bg-danger")
        tarea.classList.remove("bg-success")
      }
    }

  function eliminarTarea(id) {

    setTareas(tareas.filter((tarea,index) => index !==id));

    if (hechas > 1) {
      setHechas(hechas - 1);
    } else {
      setHechas(hechas - hechas);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    crearTareas({
      texto,
      estado,
    });
    setTexto("");
  };

  
  useEffect(() => {
    
    fetch(urlPokemones)
    .then((response) => response.json())
      .then((data) =>
        data.results.map((item) => {
          fetch(item.url)
            .then((response) => response.json())
              .then((pokemones) => listaPokemones.push(pokemones));
                return setPokemones(listaPokemones);
            }),
            );
  }, [])


    function eliminarFavorito(fav){
        setFavoritos(favoritos.filter((element)=> element!==fav))
    }

    function agregarFavorito(fav) {
        if(!favoritos.includes(fav))
              setFavoritos([
                ...favoritos,
                  fav
              ]);
            }

     

    return (
        <Contexto.Provider value={{pokemones, favoritos, eliminarFavorito,agregarFavorito, tareas,texto,estado,hechas,crearTareas,cambiarFondo,eliminarTarea,handleSubmit,setTexto}}>
            {props.children}
        </Contexto.Provider>

    )
}