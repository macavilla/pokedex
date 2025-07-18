import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPokemonList } from "./features/pokemon/pokemonListSlice";
import type { RootState, AppDispatch } from "./app/store";
import PokemonList from "./components/PokemonList/PokemonList";

import "./App.css";

const App = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { pokemons, loading, error } = useSelector(
    (state: RootState) => state.pokemonList
  );

  useEffect(() => {
    dispatch(fetchPokemonList({ limit: 20 }));
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <PokemonList.Root>
      {pokemons?.map((pokemon) => (
        <PokemonList.Item key={pokemon.name} pokemonName={pokemon.name} />
      ))}
    </PokemonList.Root>
  );
};

export default App;
