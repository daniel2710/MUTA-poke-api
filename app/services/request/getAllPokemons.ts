import { pokeList } from "@/interfaces/pokeapi";
import { baseURL } from "../axios/config";

interface Props{
  page: number;
}

export const getAllPokemons = async ({ page = 1 }: Props): Promise<pokeList> => {
  // offset
  const offset = (page - 1) * 20;

  try {
    const { data } = await baseURL.get<pokeList>(`/api/v2/pokemon?limit=20&offset=${offset}`);

    const detailedResults = await Promise.all(
      data.results.map(async (pokemon) => {
        const pokemonDetails = await baseURL.get<pokeList>(pokemon.url);
        return {
          ...pokemon,
          details: pokemonDetails.data
        };
      })
    )

    return {
      ...data,
      details: detailedResults
    };

  } catch (error) {
    return {
			count: 0,
			next: null,
			previous: null,
			results: [],
      details: []
		}
  }
};
