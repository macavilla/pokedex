import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPokemonList } from "./features/pokemon/pokemonListSlice";
import type { RootState, AppDispatch } from "./app/store";
import PokemonList from "./components/PokemonList/PokemonList";

import "./App.css";
import Pagination from "./components/Pagination/Pagination";

const App = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { pokemons, loading, error, next, previous } = useSelector(
    (state: RootState) => state.pokemonList
  );

  useEffect(() => {
    dispatch(fetchPokemonList({ limit: 12 }));
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <PokemonList.Title />
      <PokemonList.Root>
        {pokemons?.map((pokemon) => (
          <PokemonList.Item key={pokemon.name} pokemonName={pokemon.name} />
        ))}
      </PokemonList.Root>

      <Pagination.Root>
        {previous && (
          <Pagination.Button
            onClick={() => dispatch(fetchPokemonList({ url: previous }))}
          >
            ⬅️ Anterior
          </Pagination.Button>
        )}
        {next && (
          <button onClick={() => dispatch(fetchPokemonList({ url: next }))}>
            Siguiente ➡️
          </button>
        )}
      </Pagination.Root>
    </>
  );
};

export default App;
