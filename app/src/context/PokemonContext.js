import { createContext, useState, useEffect } from 'react';
import { generateBaseUrl } from "../Components/Helpers/functionsHelpers";
import axios from 'axios';
export const PokemonContext = createContext();

export const PokemonProvider = ({ children }) => {
	const [pokemons, setPokemons] = useState([]);

	const getPokemonsDetails = async () => {
		try {
			const response = await axios.get(generateBaseUrl());
			const pokemonsArray = response.data.results;
			await axios.all(pokemonsArray.map((pokemon) => axios.get(pokemon.url))).then((results) => {
				setPokemons(results);
			});
		} catch (error) {
			console.log('getPokemonsDetails error: ', error);
		}
	};

	useEffect(() => {
		getPokemonsDetails();
	}, []);

	return (
		<PokemonContext.Provider value={{ pokemons, setPokemons }}>{children}</PokemonContext.Provider>
	);
};