import { pokeInfo } from "@/interfaces/pokeapi";
import { baseURL } from "../axios/config";

interface Props{
  name: string;
}

export const getPokemonByName = async ({ name = '' }: Props): Promise<pokeInfo> => {
  try {
    const { data } = await baseURL.get<pokeInfo>(`/api/v2/pokemon/${name}`);
    return data

  } catch (error: any) {
    return error
  }
}
