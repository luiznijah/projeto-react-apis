import axios from "axios";
import { useParams, useLoaderData } from "react-router-dom";

export const PokemonDetailsPage = () => {
  return (
    <div>
      <p>DetailsPokemon</p>
      <span>{pokemon.name}</span>
      <span>{pokemon.id}</span>
    </div>
  );
};

export const pokemonDetailsLoader = async ({ params }) => {
  const { pokemon } = params;

  const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
  console.log(res);
  return res;
};
