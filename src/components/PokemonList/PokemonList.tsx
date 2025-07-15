import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPokemonList } from "../../features/pokemon/pokemonListSlice";
import type { RootState, AppDispatch } from "../../app/store";

const PokemonList = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { results, loading, error } = useSelector(
    (state: RootState) => state.pokemonList
  );

  useEffect(() => {
    dispatch(fetchPokemonList({ limit: 20 }));
  }, [dispatch]);

  if (loading) return <p>Cargando listado...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <ul>
      {results.map((pokemon) => (
        <li key={pokemon.name}>{pokemon.name}</li>
      ))}
    </ul>
  );
};

export default PokemonList;
