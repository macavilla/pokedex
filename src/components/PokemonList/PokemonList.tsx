import { StyledPokemonList } from "./PokemonList.styled";
import PokemonCard, { type PokemonCardProps } from "../PokemonCard/PokemonCard";

type PokemonListProps = {
  children: React.ReactNode;
};

const Root = ({ children }: PokemonListProps) => (
  <StyledPokemonList>{children}</StyledPokemonList>
);

const Item = ({ pokemonName }: PokemonCardProps) => (
  <PokemonCard pokemonName={pokemonName} />
);

const Title = () => <h1>Pokedex</h1>;

const PokemonList = {
  Root,
  Item,
  Title,
};

export default PokemonList;
