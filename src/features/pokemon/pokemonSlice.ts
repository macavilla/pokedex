import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

type Pokemon = {
  name: string;
  sprites: { front_default: string };
  types: { type: { name: string } }[];
};

type PokemonState = {
  entities: Record<string, Pokemon>;
  loading: boolean;
  error: string | null;
};

const initialState: PokemonState = {
  entities: {},
  loading: false,
  error: null,
};
export const fetchPokemon = createAsyncThunk(
  "pokemon/fetchPokemon",
  async (name: string) => {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    return await res.json();
  }
);

const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPokemon.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPokemon.fulfilled, (state, action) => {
        state.loading = false;
        const pokemon = action.payload;
        state.entities[pokemon.name] = pokemon;
      })
      .addCase(fetchPokemon.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? "Algo salió mal";
      });
  },
});

export default pokemonSlice.reducer;
