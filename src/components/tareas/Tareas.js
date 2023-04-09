import { useState, useEffect, useContext} from "react";

import {Contexto} from "../../context/Context"
import {FaCheck, FaRegTrashAlt} from "react-icons/fa"

function Tareas() {
  

  const {texto,hechas,tareas,handleSubmit, eliminarTarea,cambiarFondo,setTexto} = useContext(Contexto);

  /*
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

  function cambiarFondo(tareaId) {
    const tarea = document.getElementById(`tarea${tareaId}`);

    for(let i=0; i<tareas.length; i++){
      if(tareas[i].id === tareaId && tareas[i].estado === false){
        tareas[i].estado=true
        setHechas(hechas + 1)
        tarea.classList.remove("bg-danger")
        tarea.classList.add("bg-success")
      }else if (tareas[i].id === tareaId && tareas[i].estado === true){
        tareas[i].estado=false
        setHechas(hechas - 1);
        tarea.classList.add("bg-danger")
        tarea.classList.remove("bg-success")
      }
    }
  }

  function eliminarTarea(tareaId) {
    setTareas(tareas.filter((tarea) => tarea.id !==tareaId));
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
    setTareas(data);
  }, []); */

  return (
    <div className="container d-flex flex-column justify-content-center">
      <h1 className="text-center mt-5">Registro de Tareas</h1>

      <form
        onSubmit={handleSubmit}
        className="form-control m-auto mb-5"
        style={{ maxWidth: 700, minWidth: 300 }}
      >
        <div className="input-botton d-flex flex-row justify-content-between gap-2 mt-3">
          <input
            id="input"
            onChange={(e) => setTexto(e.target.value)}
            value={texto}
            className="form-control w-100 text-center m-auto"
            type="text"
            placeholder="Que tiene por hacer?"
          />
          <button className="btn btn-primary m-auto" type="submit">
            Agregar
          </button>
        </div>

        <ul className="lista-tareas w-100 mt-2">
          {tareas.map((tarea, index) => {
            return (
              <div className="container d-flex gap-2 mt-2">
                <li
                  key={tarea.id}
                  id={`tarea${tarea.id}`}
                  className="tarea justify-content-between w-100 rounded p-2 bg-danger  text-light"
                  style={{ listStyle: "none", margin: 0 }}
                >
                  <p className="texto-tarea">{tarea.texto}</p>
                </li>
                
                  <button
                    id={`estado${tarea.id}`}
                    onClick={() => {
                      cambiarFondo(tarea.id, index);
                    }}
                    className="btn btn-success"
                  >
                    <FaCheck/>
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => {
                      eliminarTarea(index);
                    }}
                  >
                    <FaRegTrashAlt/>
                  </button>
                
              </div>
            );
          })}
        </ul>
        <p className="text-success">Hechas: {hechas}</p>
        <p className="text-danger">Sin Hacer: {tareas.length - hechas}</p>
        <p className="">Total tareas: {tareas.length}</p>
      </form>
    </div>
  );
}

export default Tareas;
