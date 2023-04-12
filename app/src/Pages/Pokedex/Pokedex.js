import  Header  from "../../Components/Header/Header";
import { PokemonCard } from "../../Components/PokemonCard/PokemonCard";
import { useNavigate } from "react-router-dom";
import {irParaDetalhes} from "../../routes/coordinator";

export function Pokedex(props){
    const navigate = useNavigate();


    return(
        <>
        <h1>pokedex</h1>
        <Header/>
        <button onClick={()=> irParaDetalhes(navigate, "detalhes") }>
        Ver Mais Detalhes
      </button>
        <PokemonCard pokemon={props.pokemon}/>
        </>
    )
}