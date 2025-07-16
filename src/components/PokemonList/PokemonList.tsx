import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPokemonList } from "../../features/pokemon/pokemonListSlice";
import type { RootState, AppDispatch } from "../../app/store";

type Props = {
  children: React.ReactNode;
};

export default function PokemonList({ children }: Props) {
  const dispatch = useDispatch<AppDispatch>();
  const { loading, error } = useSelector(
    (state: RootState) => state.pokemonList
  );

  useEffect(() => {
    dispatch(fetchPokemonList({ limit: 12 }));
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return <ul>{children}</ul>;
}
