import { MainCard } from './components/MainCard/index';
import { Route, Redirect } from 'react-router-dom';
import { CardPokemon } from './pages/CardPokemon/index';
import './App.scss';

const App = () => {
  return (
    <div className="App">
      <Route path="/pokemons" exact component={MainCard}></Route>
      <Route path="/pokemons/:name" exact component={CardPokemon}></Route>
      <Redirect from="/" to="/pokemons" />
    </div>
  );
};

export default App;
