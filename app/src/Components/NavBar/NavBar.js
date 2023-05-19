import { Button, Box } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { goToPokedexPage, goToHomePage } from '../../routes/coordinator';

const NavBar = () => {
	const navigate = useNavigate();

	
	return (
		<Box>
			<Button onClick={() => goToPokedexPage(navigate)}>Pokedex</Button>
			<Button onClick={() => goToHomePage(navigate)}>Voltar</Button>
		</Box>
	);
};

export default NavBar;