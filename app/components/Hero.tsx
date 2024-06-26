import Image from 'next/image';
import { Merienda } from 'next/font/google';

const font = Merienda({ weight: "400", subsets: ['latin'] });

export default function Hero() {
  
  return (
    <div className="flex flex-col bg-blue-100 dark:bg-blue-800 p-5 my-5 rounded-lg relative sm:h-[200px] md:h-[500px]">
      <h1 className={`${font.className} text-4xl text-center`}>The Compelling Website of</h1>
      <h1 className={`${font.className} text-4xl text-center mt-2 md:invisible`}>Jacques</h1>
      <h1 className={`${font.className} text-4xl text-center md:invisible`}>Van Blokland</h1>
      <div>
        <Image
          src="/NameSign.png"
          alt="Hero Image"
          fill
          className="absolute top-0 left-0 w-full h-full rounded-lg invisible md:visible"
        />
      </div>
    </div>
  )
}