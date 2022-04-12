import { IPokemon } from "../interfaces/pokemon";
import api from "./configAxios";

type Return = Promise<IPokemon> | "Not found";

export const getPokemon = async (pokemonName: string): Promise<Return> => {
  try {
    const { data } = await api.get(pokemonName);

    return data;
  } catch (err) {
    return "Not found";
  }
};
