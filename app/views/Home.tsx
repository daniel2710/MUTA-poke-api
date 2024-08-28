'use client'
import Image from "next/image";
import ListPoke from "@/components/ListPoke"
import Navbar from "@/components/Navbar"
import { pokeList } from "@/interfaces/pokeapi";
import bgMuta from '../../public/BG-2.png'
import Pagination from "@/components/Pagination";
import { usePagination } from "@/hooks/usePagination";

interface Props{
  data: pokeList;
}

const Home = ({ data }: Props) => {

  const {
    currentPage, 
    setCurrentPage, 
    search,
    setSearch,
    filteredResults
  } = usePagination(data)

  return (
    <main className="min-h-screen bg-[#010203] pb-10">
      <header>
        <Navbar
          search={search}
          setSearch={setSearch}
        />
      </header>
      <section className="relative">
        <Image
          src={bgMuta}
          className="w-full h-[35em] absolute z-0 xl:top-[100px]"
          alt="background"
          width={100}
          height={100}
          unoptimized
        />
        {filteredResults.length === 0 ? (
          <div className="relative z-50 mt-10 mx-5">
            <p className="text-white">No hay resultados, intente más tarde.</p>
          </div>
        )
        : (
          <ListPoke
            pokemons={filteredResults}
          />
        )
        }
      </section>
      {!search && filteredResults.length > 0 && (
        <footer className="relative z-50 mt-8 mx-5 xl:mt-14"> 
          <Pagination
            data={data}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            search=""
          />
        </footer>
      )}
    </main>
  )
}

export default Home