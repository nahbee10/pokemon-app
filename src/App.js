import logo from './logo.svg';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import PokemonDetail from './components/PokemonDetail';
import './App.css';


function App() {
  return (
    <div className="App">
      <div className="homeButton">
        <a href="/">home</a>
      </div>
      <Router>
        <Switch>
          <Route path="/" exact={true} component={Home} />
          <Route exact path="/:pokemonName" component={PokemonDetail} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
