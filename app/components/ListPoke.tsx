'use client'
import { pokeInfoPreview } from '@/interfaces/pokeapi'
import PokeInfo from './PokeInfo'

interface Props{
    pokemons: pokeInfoPreview[]
} 

const ListPoke = ({ pokemons }: Props) => {
    return (
        <div className='z-50 relative'>
            <div className='mt-10 mx-5 grid grid-cols-2 grid-flow-row gap-5 md:grid-cols-4 md:gap-8 2xl:grid-cols-5'>
                {pokemons?.map((pokemon, idx)=>(
                    <PokeInfo 
                        key={idx}
                        pokemon={pokemon?.details}
                    />
                ))}
            </div>
        </div>
    )
}

export default ListPoke
