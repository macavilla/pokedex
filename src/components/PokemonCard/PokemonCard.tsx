import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchPokemon } from "../../features/pokemon/pokemonSlice";

import { type PokemonItemType } from "../../features/pokemon/pokemonListSlice";
import type { RootState, AppDispatch } from "../../app/store";

import {
  StyledPokemonCard,
  StyledPokemonName,
  StyledPokemonWeight,
  StyledPokemonTypes,
  StyledPokemonType,
  StyledPokemonImageContainer,
} from "./PokemonCard.styled";

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
    <StyledPokemonCard>
      <StyledPokemonName>{pokemon.name}</StyledPokemonName>
      <StyledPokemonImageContainer>
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      </StyledPokemonImageContainer>
      {pokemon.types && (
        <StyledPokemonTypes>
          {pokemon.types.map((t) => (
            <StyledPokemonType key={t.type.name}>
              {t.type.name}
            </StyledPokemonType>
          ))}
        </StyledPokemonTypes>
      )}
      <StyledPokemonWeight>Weight: {pokemon.weight}</StyledPokemonWeight>
    </StyledPokemonCard>
  );
};

export default PokemonCard;
