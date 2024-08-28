'use client'
import { pokeList } from "@/interfaces/pokeapi";
import { useRouter } from "next/navigation";
import { Dispatch, SetStateAction } from "react";

interface Props{
    data: pokeList;
    setCurrentPage: Dispatch<SetStateAction<number>>;
    currentPage: number;
    search: string;
}

const Pagination = ({ data, setCurrentPage, currentPage, search }: Props) => {
    const router = useRouter()
    return (
        <div className="flex gap-5 justify-center items-center text-white">
                <button
                    type="button"
                    disabled={data.previous ? false : true}
                    className="py-1 px-2 bg-[#dafb66] text-black rounded-lg disabled:bg-gray-700 disabled:text-white"
                    onClick={()=>{
                        setCurrentPage((prevPage: number) => prevPage - 1);
                        router.push(`?page=${currentPage}`, undefined);
                    }}
                >
                    Anterior
                </button>
            
            <button
                className="py-1 px-2 bg-[#dafb66] text-black rounded-lg disabled:bg-gray-700 disabled:text-white"
                type="button"
                disabled={data.next ? false : true}
                onClick={()=>{
                    setCurrentPage((prevPage: number) => prevPage + 1);
                    router.push(`?page=${currentPage}`, undefined);
                }}
            >
                Siguiente
            </button>
        </div>
    )
}

export default Pagination
