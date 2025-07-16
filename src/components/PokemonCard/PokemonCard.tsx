import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchPokemon } from "../../features/pokemon/pokemonSlice";

import { type PokemonItemType } from "../../features/pokemon/pokemonListSlice";
import type { RootState, AppDispatch } from "../../app/store";

interface PokemonCardProps {
  pokemonName: PokemonItemType["name"];
}
const PokemonCard = ({ pokemonName }: PokemonCardProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const { entities } = useSelector((state: RootState) => state.pokemon);
  const pokemon = entities[pokemonName];

  useEffect(() => {
    if (!pokemon) dispatch(fetchPokemon(pokemonName));
  }, [dispatch, pokemonName, pokemon]);

  if (!pokemon) return <div>Loading {pokemonName}...</div>;
  return (
    <li>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <h3>{pokemon.name}</h3>
    </li>
  );
};

export default PokemonCard;
