import { useEffect, useState } from "react";
import { pokeInfoPreview, pokeList } from "@/interfaces/pokeapi";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

export const usePagination = (data: pokeList) => {
  const router = useRouter()
  const searchParams = useSearchParams();
  const [ search, setSearch ] = useState('');
  const [ currentPage, setCurrentPage ] = useState(
    searchParams.get("page") ? Number(searchParams.get("page")) : 1
  );

  // Filtrar resultados (dado que la api no cuenta con un endpoint para filtrar por termino de búsqueda, se filtrará solo localmente en los resultados que arroje cada página)
  const filteredResults = data.details.filter((pokemon: pokeInfoPreview) =>
    pokemon.name.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    const urlParams = new URLSearchParams(window?.location?.search);

    if (isNaN(currentPage)) {
      setCurrentPage(1);
    }

    // page params
    const paramPage = "page";
    let valuePage = currentPage.toString();

    if (!urlParams.has(paramPage)) {
      urlParams.append(paramPage, valuePage);
    } else {
      urlParams.set(paramPage, valuePage);
    }

    const newUrl = `${window.location.pathname}?${urlParams.toString()}`;
    router.push(newUrl, undefined);
  }, [currentPage, router]);

  return {
    currentPage,
    setCurrentPage,
    search,
    setSearch,
    filteredResults
  }
}