import { PokemonCardStyle } from "./PokemonCardStyle"

export function PokemonCard(props){
    console.log(`props ${props}`)
    return(
        <PokemonCardStyle>
            <h2>pokemon</h2>
        </PokemonCardStyle>
    )
}