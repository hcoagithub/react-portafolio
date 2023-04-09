import lenguajes from "../data/data.js";

function Habilidades() {
  return (
    <div className="container text-light">
     
     <div className="row text-center text-dark">
            <h1>Lenguajes</h1>
            <div className="lenguajes justify-content-around w-100 d-flex">
                {lenguajes.map((lenguaje) => {
                    return (
                    <div className="card-lenguaje" key={lenguaje.id}>
                        <div className="card-body">
                        <h2 className="card-title text-dark">{lenguaje.nombre}</h2>
                        <img
                            src={lenguaje.icono}
                            style={{ width: "auto", height: 100 }}
                            alt="imagen no encontrada"
                        />
                        </div>
                    </div>
                    );
                })}
            </div>
        </div>
    </div>
  );
}

export default Habilidades;
