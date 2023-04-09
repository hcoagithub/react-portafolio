import { BrowserRouter, Switch, Route } from "react-router-dom";
import Pokemones from "./components/apipokemon/Pokemones";
import NavBar from "./components/NavBar";
import Home from './views/Home'
import Habilidades from './views/Habilidades'
import AcercadeMi from './views/AcercadeMi'
import AlgoMas from './views/AlgoMas'
import Tareas from './components/tareas/Tareas'

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/react-portafolio" component={Home}/>
        <Route path="/ApiPokemon" component={Pokemones}/>
        <Route path="/GeneradorDeTareas" component={Tareas}/>
        <Route path="/AcercadeMi" component={AcercadeMi}/>
        <Route path="/Habilidades" component={Habilidades}/>
        <Route path="/AlgoMas" component={AlgoMas}/>
      </Switch>
      
    </BrowserRouter>      
  );
}

export default App;