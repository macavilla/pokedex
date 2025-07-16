import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export type PokemonItemType = {
  name: string;
  url: string;
};

type PokemonListState = {
  results: PokemonItemType[];
  loading: boolean;
  error: string | null;
};

const initialState: PokemonListState = {
  results: [],
  loading: false,
  error: null,
};

export const fetchPokemonList = createAsyncThunk(
  "pokemon/fetchList",
  async ({ limit = 20, offset = 0 }: { limit?: number; offset?: number }) => {
    const res = await fetch(
      `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
    );
    const data = await res.json();
    return data.results as PokemonItemType[];
  }
);

const pokemonListSlice = createSlice({
  name: "pokemonList",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPokemonList.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPokemonList.fulfilled, (state, action) => {
        state.loading = false;
        state.results = action.payload;
      })
      .addCase(fetchPokemonList.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? "Algo salió mal";
      });
  },
});

export default pokemonListSlice.reducer;
