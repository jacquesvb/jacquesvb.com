import Link from "next/link";
import Image from "next/image";
import Hero from "@/app/components/Hero";

export default function Home() {
  return (
    <div className="mt-1 min-h-[600px]">
      <Hero />
      <div className="dark:bg-blue-800 flex flex-col items-center md:flex-row h-[200px] relative rounded-lg">
        <div className="h-[200px] w-1/2 relative">
          <Image
            src="/Jacques2.png"
            alt="Jacques Van Blokland"
            fill
            className="object-scale-down max-h-full drop-shadow-md rounded-md m-auto"
          />
        </div>
        <div className="w-1/2 flex flex-col items-center justify-center pt-4 md:pt-0">
          <Link href="/about">
            <button className="btn btn-primary bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 w-30 md:w-60">About Me</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
