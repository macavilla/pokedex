import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export type PokemonItemType = {
  name: string;
  url: string;
};

type PokemonListState = {
  pokemons: PokemonItemType[];
  loading: boolean;
  error: string | null;
  next: string | null;
  previous: string | null;
};

const initialState: PokemonListState = {
  pokemons: [],
  loading: false,
  error: null,
  next: null,
  previous: null,
};

export const fetchPokemonList = createAsyncThunk(
  "pokemon/fetchList",
  async (params: { limit?: number; url?: string }) => {
    const fetchUrl =
      params.url ||
      `https://pokeapi.co/api/v2/pokemon?limit=${params.limit ?? 12}`;

    const res = await fetch(fetchUrl);
    const data = await res.json();
    return data as {
      results: PokemonItemType[];
      next: string;
      previous: string;
    };
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
        state.pokemons = action.payload.results;
        state.next = action.payload.next;
        state.previous = action.payload.previous;
      })
      .addCase(fetchPokemonList.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? "Algo salió mal";
      });
  },
});

export default pokemonListSlice.reducer;
