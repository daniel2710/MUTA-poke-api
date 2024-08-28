'use client'
import Image from "next/image";
import Navbar from "@/components/Navbar"
import { pokeInfo } from "@/interfaces/pokeapi";
import bgMuta from '../../public/BG-2.png'
import PokeDetails from "@/components/PokeDetails";

interface Props{
  data?: pokeInfo;
}

const Pokemon = ({ data }: Props) => {
  return (
    <main className="min-h-screen bg-[#010203] pb-10">
      <header>
        <Navbar/>
      </header>
      <section className="relative">
        <Image
          src={bgMuta}
          className="w-full h-[35em] absolute z-0"
          alt="background"
          width={100}
          height={100}
          unoptimized
        />
        {!data ? (
          <div className="relative z-50 mt-10 mx-5">
            <p className="text-white">No hay resultados, intente más tarde.</p>
          </div>
        )
        : (
          <div className="relative z-50 mt-10 px-5">
            <PokeDetails
              pokemon={data}
            />
          </div>
        )
        }
      </section>
    </main>
  )
}

export default Pokemon