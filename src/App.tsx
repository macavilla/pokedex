import PokemonList from "./components/PokemonList/PokemonList";
import PokemonCard from "./components/PokemonCard/PokemonCard";
import "./App.css";
import { useSelector } from "react-redux";
import type { RootState } from "./app/store";

function App() {
  const pokemons = useSelector((state: RootState) => state.pokemonList.results);
  return (
    <>
      <PokemonList>
        {pokemons.map((p) => (
          <PokemonCard key={p.name} pokemonName={p.name} />
        ))}
      </PokemonList>
    </>
  );
}

export default App;
