import { Box, Button, Card, CardBody, CardHeader, Heading, Text, Image } from '@chakra-ui/react';

import { goToPokemonDetailsPage } from '../../routes/coordinator';

const PokemonCard = ({ pokemon }) => {
	const renderPokemonTypes = (pokemon) => {
		const typesArray = pokemon.types;
		const types = typesArray.map((pokemon, index) => {
			return `${pokemon.type.name} `;
		});
		return types;
	};
	return (
		<Card display="flex">
			<CardHeader display="flex">
				<Image />
				<Text>#{pokemon.id}</Text>
			</CardHeader>
			<CardBody>
				<Heading
					as="h3"
					size="md">
					{pokemon.name}
				</Heading>
				<Box>{renderPokemonTypes(pokemon)}</Box>
				<Button onClick={() => goToPokemonDetailsPage(navigate, pokemon.name)}>Detalhes</Button>
				<Button>Capturar!</Button>
			</CardBody>
		</Card>
	);
};

export default PokemonCard;

//data loader

export const pokemonLoader = async () => {};