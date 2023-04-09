import { Link } from "react-router-dom";

function AlgoMas (){
    return (
        <div className="container row justify-content-around w-100 m-auto mb-5">
            <div className="card mt-5" style={{width: 350, height: 400}}>
                <div className="card-body justify-content-around d-flex flex-column text-center">
                    <h1 className="card-title">
                        Api Pokemon
                    </h1>
                    <img className="" alt="No hay imagen disponible..." src="https://upload.wikimedia.org/wikipedia/commons/b/be/Pokemon_Jets.jpg" style={{width: "100%", height: 200}}/>
                </div>
                <Link to="/ApiPokemon" className="btn btn-primary w-50 m-auto mb-2">Ver</Link>
            </div>
            <div className="card mt-5 " style={{width: 350, height: 400}}>
                <div className="card-body justify-content-around d-flex flex-column text-center">
                    <h1 className="card-title">
                        Generador de Tareas
                    </h1>
                    <img className="" src="https://media.cdnandroid.com/5f/f4/85/36/5a/imagen-to-do-list-schedule-planner-to-do-reminders-0big.jpg" alt="No hay imagen disponible..." style={{width: "100%", height: 200}}/>
                </div>
                <Link to="/GeneradorDeTareas" className="btn btn-primary w-50 m-auto mb-2">Ver</Link>
            </div>
        </div>
        
    )
}

export default AlgoMas