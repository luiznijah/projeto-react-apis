// import { Pokedex } from "./Pages/Pokedex/Pokedex";
// import { Home } from "./Pages/Home/Home";
// import { Detalhes } from "./Pages/Detalhes/Detalhes"
import { Router } from "./routes/Router";
import { GlobalStyled } from "./GlobalStyled";
import { useEffect, useState } from "react";
import axios from "axios";
import { PokemonCard } from "./Components/PokemonCard/PokemonCard";

function App() {
  const [pokemons, setPokemons] = useState([])
  const recebePokemon = () =>{
    axios.get("https://pokeapi.co/api/v2/pokemon/.")
    .then((resposta)=>{
      console.log(resposta.data)
      setPokemons(resposta.data.results)
    })
    .catch((erro)=>{
      console.log(erro)
    })
  }
  useEffect(()=>{
    recebePokemon()
  },[])
 
  return (
    <div>
      <GlobalStyled/>
      <Router />
      {pokemons.map((pokemon)=>{
        return <PokemonCard 
        key={pokemon.name} 
        pokemon={pokemon}
        recebePokemon={recebePokemon}/>
      })}
    </div>
  );
}

export default App;


