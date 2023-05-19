import React from 'react';
import ReactDOM from 'react-dom/client';
import {
	createBrowserRouter,
	createRoutesFromElements,
	RouterProvider,
	Route,
} from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { PokemonProvider } from './context/pokemonContext';
import { pokemonLoader } from './components/pokemonCard';

import * as pages from './pages';
import App from './App';
import './index.css';

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route
			path="/"
			element={<App />}>
			<Route
				index
				element={<pages.HomePage />}
				// loader={pokemonLoader}
				errorElement={<pages.ErrorPage />}
			/>
			<Route
				path="pokedex"
				element={<pages.PokedexPage />}
				// loader={pokemonLoader}
				errorElement={<pages.ErrorPage />}
			/>
			<Route
				path=":pokemon"
				element={<pages.PokemonDetailsPage />}
				// loader={pokemonLoader}
				errorElement={<pages.ErrorPage />}
			/>
			<Route
				path="*"
				element={<pages.ErrorPage />}
			/>
		</Route>
	)
);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<ChakraProvider>			
			<PokemonProvider>
				<RouterProvider router={router} />
			</PokemonProvider>
		</ChakraProvider>
	</React.StrictMode>
);