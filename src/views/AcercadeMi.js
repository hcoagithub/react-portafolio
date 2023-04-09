import { FaLaptopCode } from "react-icons/fa";
import tecnologias from './../data/data'

function AcercadeMi() {
  return (
    <div className="container-fluid">
      <div className="row ingeniero-desarrollador text-center">
        <h2 className="col-md-12 mt-4 p-2 w-100">
          <strong>
            <FaLaptopCode />Ingeniero Industrial - Desarrollador Web
            <FaLaptopCode />
          </strong>
        </h2>
      </div>



      <div className="row text-center d-flex flex-row justify-content-around">
            <h2 className="tecnologias-titulo"><strong>Tecnologias y Lenguajes que Manejo: </strong></h2>
            {tecnologias.map(tecnologia=>{
              return (
                <div className="card tecnologias m-2" style={{width:250}}  key={tecnologia.id}>
                  <h1 className="card-title">{tecnologia.nombre.toUpperCase()}</h1>
                  <div className="card-body" >
                    <img src={tecnologia.img} alt="..." style={{width:200, height:100,margin:"auto"}}/>
                  </div>
                  
                </div>
              )
            })}
          </div>
      
        
      </div>
  );
}

export default AcercadeMi;
