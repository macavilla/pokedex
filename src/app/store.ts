import { configureStore } from "@reduxjs/toolkit";
import pokemonListReducer from "../features/pokemon/pokemonListSlice";
import pokemonReducer from "../features/pokemon/pokemonSlice";

export const store = configureStore({
  reducer: {
    pokemonList: pokemonListReducer,
    pokemon: pokemonReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
