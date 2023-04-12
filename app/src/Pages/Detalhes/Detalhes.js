import  Header  from "../../Components/Header/Header";
import { PokemonCard } from "../../Components/PokemonCard/PokemonCard";
import { useNavigate } from "react-router-dom";
import {irParaHome} from "../../routes/coordinator";

export function Detalhes(props){
    const navigate = useNavigate();
    return(
        <>
        <h1>detalhes</h1>

        <Header/>
        <button onClick={()=> irParaHome(navigate) } >
        Voltar a Home 
      </button>
        <PokemonCard pokemon={props.pokemon} />
        </>
    )
}