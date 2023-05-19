import { Box } from '@chakra-ui/react';
import PokemonList from '../../components/pokemonList';
import { useLoaderData } from 'react-router-dom';
import PokemonCard from '../../components/pokemonCard';

export const HomePage = () => {
	const pokemons = useLoaderData();

	return (
		<Box>
			<PokemonList />
			{/* {pokemons.map((pokemon) => (
				<PokemonCard pokemon={pokemon} />
			))} */}
		</Box>
	);
};