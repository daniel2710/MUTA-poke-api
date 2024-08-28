import Image from "next/image";
import logoMuta from '../../public/muta-logo.png';

interface Props{
  size?: "small" | "medium";
  color?: "white";
}

const Loader = ({ size = "medium", color }: Props) => {
  return (
    <span className={`loading loading-bars ${color ? color : 'text-main-text'} ${size === 'medium' ? 'h-[80px] w-[80px]' : 'h-5 w-5'}`}>
     <Image
        unoptimized
        priority
        alt="logoMuta"
        className={`${size === 'medium' ? 'h-[80px] w-[80px]' : 'h-5 w-5'} text-black`}
        src={logoMuta}
      />
    </span>
  )
}

export default Loader