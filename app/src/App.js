import { Outlet } from 'react-router-dom';
import { Footer } from "./Components/Footer/Footer"
import { Header } from "./Components/Header/Header";
import { useContext } from 'react';
import { PokemonContext } from "./context/PokemonContext";
import axios from 'axios';
import { generateBaseUrl } from "./Components/Helpers/functionsHelpers";
import { Flex } from '@chakra-ui/react';

function App() {
	const { pokemons } = useContext(PokemonContext);
	return (
		<>
      <Flex direction="column">
        <Header />
        <Outlet />
        <Footer />
      </Flex>
			
		</>
	);
}


export const loaderGetPokemons = async () => {
	const response = await axios.get(generateBaseUrl());
	const pokemonsUrlArray = response.data.results;
	const promissesPokemonData = await axios.all(
		pokemonsUrlArray.map((pokemon) => axios.get(pokemon.url))
	);

	return promissesPokemonData;
};

export default App;



























