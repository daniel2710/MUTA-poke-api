import { Suspense } from 'react';
import { Metadata } from "next";
import Home from "@/views/Home";
import { getAllPokemons } from "./services/request/getAllPokemons";
import Loader from "./components/Loader";

interface SearchParams {
  page?: string;
}

interface PageProps {
  searchParams: SearchParams;
}

const Page = async ({ searchParams }: PageProps) => {
  const page = parseInt(searchParams.page || "1", 10);
  const pokeList = await getAllPokemons({ page });

  return (
    <Suspense fallback={<div className="min-h-screen min-w-screen flex justify-center items-center">
      <Loader />
    </div>}>
      <Home
        data={pokeList}
      />
    </Suspense>
  );
}

export default Page

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Prueba Técnica - Daniel De Avila',
    description: 'Prueba Técnica para la empresa MUTA, ciudad de Barranquilla.',
    icons: [
      {
        url: '/poke-logo.png',
      } 
    ]
  };
}