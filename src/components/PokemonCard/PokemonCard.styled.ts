import styled from "styled-components";

export const StyledPokemonCard = styled.li`
  margin: 1rem;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 200px;
`;

export const StyledPokemonImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px;
`;

export const StyledPokemonName = styled.h3`
  margin: 0;
  text-transform: capitalize;
  font-size: 1.5rem;
`;

export const StyledPokemonTypes = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const StyledPokemonType = styled.li`
  display: inline-block;
  margin-right: 0.5rem;
  padding: 0.25rem 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const StyledPokemonWeight = styled.p`
  font-weight: bold;
  margin: 7px 0 0;
`;
