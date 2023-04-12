import  Header  from "../../Components/Header/Header";
import { PokemonCard } from "../../Components/PokemonCard/PokemonCard";
import { useNavigate } from "react-router-dom";
import {irParaPokedex} from "../../routes/coordinator";


export function Home(props){
    const navigate = useNavigate();

    return(
        <>
        <h1>home</h1>
        <Header/>
        <button onClick={()=> irParaPokedex(navigate, "pokedex") }>
        Ver Minha Lista Pokedex
      </button>
        <PokemonCard pokemon={props.pokemon}/>
        </>
    )
}