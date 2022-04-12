import { IPokemon } from "../interfaces/pokemon";
import api from "./configAxios";

export const getPokemon = async (pokemonName: string): Promise<IPokemon> => {
  const { data } = await api.get(pokemonName.toLowerCase());

  return data;
};
