'use client'
import { pokeInfo } from "@/interfaces/pokeapi";
import Image from "next/image";
import Link from "next/link";

interface Props{
  pokemon?: pokeInfo;
}

const PokeInfo = ({ pokemon }: Props) => {
  return (
    <Link
      className="max-w-[200px] xl:max-w-[250px] transition-all duration-300 rounded-xl text-white bg-[#0d0d0d] hover:bg-[#dafb66] hover:text-black"
      href={`/pokemon/${pokemon?.name}`}
    >
      <div className="min-h-[100px] py-2 flex flex-col items-center justify-center">
          <div className="flex items-center">
            <Image
              src={pokemon?.sprites?.front_default ?? ''}
              className="w-[70px] h-[70px]"
              alt="background"
              width={100}
              height={100}
              unoptimized
            />
            <Image
              src={pokemon?.sprites?.back_default ?? ''}
              className="w-[70px] h-[70px]"
              alt="background"
              width={100}
              height={100}
              unoptimized
            />
          </div>
          <span>{pokemon?.name}</span>
          <span>#{pokemon?.id}</span>
      </div>
    </Link>
  )
}

export default PokeInfo
