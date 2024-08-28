import { Dispatch, FC, SetStateAction } from "react"
import Image from "next/image"
import mutaLogo from '../../public/muta-logo.png';
import pokeLogo from '../../public/poke-logo.png';
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props{
    search?: string;
    setSearch?: Dispatch<SetStateAction<string>>;
}

const Navbar = ({ search, setSearch }: Props) => {
    const pathname = usePathname()

    return (
        <nav className="bg-[#010203] min-h-20 p-2 flex flex-col gap-5 items-center md:flex-row md:py-10 md:px-5">
            <Link href={'/?page=1'} className="flex items-center gap-2">
                <Image
                    src={mutaLogo}
                    className="w-fit h-[50px]"
                    alt="muta logo"
                    width={50}
                    height={50}
                    unoptimized
                />
                <div className="h-16 w-[2px] bg-[#dafb66]"></div>
                <Image
                    src={pokeLogo}
                    className="w-fit h-[50px]"
                    alt="muta logo"
                    width={50}
                    height={50}
                    unoptimized
                />
            </Link>
            {!pathname.includes('/pokemon') && (
                <div>
                    <input
                        type="text"
                        className="rounded-sm bg-[#dafb66] h-8 placeholder:pl-2 placeholder:text-gray-600 outline-none p-1"
                        placeholder="Busca tu pokémon..."
                        value={search}
                        onChange={setSearch ? (e)=>setSearch(e.target.value) : ()=>{}}
                    />
                </div>
            )}
        </nav>
    )
}

export default Navbar
