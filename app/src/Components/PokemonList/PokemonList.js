import { Box } from '@chakra-ui/react';
import { useContext } from 'react';
import { PokemonContext } from '../../context/pokemonContext';
import PokemonCard from '../pokemonCard';

const PokemonList = () => {
	const { pokemons } = useContext(PokemonContext);
	return (
		<Box>
			{pokemons ? (
				pokemons.map((pokemon) => (
					<PokemonCard
						key={pokemon.data.id}
						pokemon={pokemon.data}
					/>
				))
			) : (
				<ErrorPage />
			)}
		</Box>
	);
};
export default PokemonList;