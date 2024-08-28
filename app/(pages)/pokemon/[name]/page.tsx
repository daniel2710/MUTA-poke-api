import { redirect } from 'next/navigation'
import Pokemon from '@/views/Pokemon';
import { getPokemonByName } from '@/services/request/getPokemonByName';
import { Suspense } from 'react';
import Loader from '@/components/Loader';
import { Metadata } from 'next';

export default async function Page({ params }: { params: { name: string } }) {
  const { name } = params

  if(!name){
    redirect('/')
  }
  const pokemonByName = await getPokemonByName({ name })

  return (
    <Suspense fallback={<div className="min-h-screen min-w-screen flex justify-center items-center">
      <Loader />
    </div>}> 
      <Pokemon
        data={pokemonByName}
      />
    </Suspense>
  )
}

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