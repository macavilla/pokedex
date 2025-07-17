import { useState } from "react";
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
  const pokemon = useSelector(
    (state: RootState) => state.pokemon.entities[pokemonName]
  );
  const [showDetails, setShowDetails] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    if (!pokemon) {
      setLoading(true);
      await dispatch(fetchPokemon(pokemonName));
      setLoading(false);
    }
    setShowDetails(!showDetails);
  };

  return (
    <StyledPokemonCard onClick={handleClick}>
      <StyledPokemonName>{pokemonName}</StyledPokemonName>

      {showDetails && (
        <>
          {loading && (
            <StyledPokemonCard>Loading {pokemonName}...</StyledPokemonCard>
          )}

          {pokemon && (
            <>
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
              <StyledPokemonWeight>
                Weight: {pokemon.weight}
              </StyledPokemonWeight>
            </>
          )}
        </>
      )}
    </StyledPokemonCard>
  );
};

export default PokemonCard;
