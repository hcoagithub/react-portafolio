import { useContext} from "react";
import { Contexto } from "../../context/Context";
import { BsFillHeartFill, BsTrash} from "react-icons/bs";

function Pokemones() {
 
  const { pokemones, eliminarFavorito, agregarFavorito, favoritos } = useContext(Contexto);



  return (
    <div className="container">

      <div className="row m-auto d-flex justify-content-around">

      <div className="justify-content-center dropdown text-light mt-3 mb-3">
        <button class="btn btn-secondary dropdown-toggle w-auto " type="button" data-bs-toggle="dropdown" aria-expanded="false">
        Lista de Favoritos: {favoritos.length}
        </button>
        <ul className="lista-favoritos dropdown-menu w-auto">
          {favoritos.map((favorito,id) => {
           
            return <li className="favorito dropdown-item" key={id}>{favorito} <BsTrash onClick={()=> eliminarFavorito(favorito)} /></li>;
          })}
        </ul>
      </div>


        {pokemones.map((poke) => {
            return (
            <div className="card m-2" key={poke.id} style={{ width: 300 }}>
              <div className="card-body d-flex flex-column text-center">
                <h1 className="card-nombre">{poke.name}</h1>
                <img
                  className=""
                  src={poke.sprites.other.dream_world.front_default}
                  style={{ width: "100%", height: 300 }}
                  alt="Imagen no encontrada"
                />
                <button
                  key={poke.id}
                  className="btn btn-primary m-auto"
                  onClick={() => {
                    agregarFavorito(poke.name);
                  }}
                >
                Agregar Favorito <BsFillHeartFill />
                </button>
              </div>
            </div>
          );
        
        })}
      </div>
    </div>
  );
}

export default Pokemones;
