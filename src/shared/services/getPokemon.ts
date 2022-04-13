import { IPokemon } from "../interfaces/pokemonInterface";
import api from "./configAxios";

export const getPokemon = async (pokemonName: string): Promise<IPokemon> => {
  const { data } = await api.get(pokemonName.toLowerCase());

  return data;
};
