'use client'
import { pokeInfo } from "@/interfaces/pokeapi";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface Props{
  pokemon?: pokeInfo;
}

const PokeDetails = ({ pokemon }: Props) => {
    const router = useRouter()

    return (
        <div className="mx-5 xl:w-[500px]">
            <div className="text-white min-h-[100px] py-2 bg-[#0d0d0d] rounded-xl flex flex-col items-center justify-center">
                <div className="flex items-center">
                    <Image
                        src={pokemon?.sprites?.front_default ?? ''}
                        className="w-[120px]"
                        alt="background"
                        width={100}
                        height={100}
                        unoptimized
                    />
                    <Image
                        src={pokemon?.sprites?.back_default ?? ''}
                        className="w-[120px]"
                        alt="background"
                        width={100}
                        height={100}
                        unoptimized
                    />
                </div>
                <div className="flex items-center">
                    <Image
                        src={pokemon?.sprites?.front_shiny ?? ''}
                        className="w-[120px]"
                        alt="background"
                        width={100}
                        height={100}
                        unoptimized
                    />
                    <Image
                        src={pokemon?.sprites?.back_shiny ?? ''}
                        className="w-[120px]"
                        alt="background"
                        width={100}
                        height={100}
                        unoptimized
                    />
                </div>
                <div className="flex flex-col gap-5 py-2">
                    <span className="uppercase">{pokemon?.name}</span>
                    <div>
                        <span className="text-sm">Habilidades ({pokemon?.abilities?.length})</span>
                        <ul className="ml-5 text-sm mt-2 flex gap-4 flex-col">
                            {pokemon?.abilities?.map((ability, idx)=>(
                                <li key={idx}>- <span className="px-2 py-1 bg-[#dafb66] text-black rounded-lg">{ability?.ability?.name}</span></li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <span className="text-sm">Tipos ({pokemon?.types?.length})</span>
                        <ul className="ml-5 text-sm mt-2 flex gap-4 flex-col">
                            {pokemon?.types?.map((type, idx)=>(
                                <li key={idx}>- <span className="px-2 py-1 bg-[#dafb66] text-black rounded-lg">{type?.type?.name}</span></li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <div className="mt-10">
                <button
                    className="py-1 px-2 bg-[#dafb66] text-black rounded-lg disabled:bg-gray-700 disabled:text-white"
                    type="button"
                    onClick={()=>{
                        router.push('/?page=1');
                    }}
                >
                    Atrás
                </button>
            </div>
        </div>
    )
}

export default PokeDetails
