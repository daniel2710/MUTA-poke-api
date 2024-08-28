import axios from "axios";

const url = "https://pokeapi.co";

// baseURL
export const baseURL = axios.create({
  baseURL: url,
});