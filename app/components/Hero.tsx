import Image from 'next/image'

export default function Hero() {
  return (
    <div className="flex flex-col bg-blue-100 dark:bg-blue-800 p-5 my-5 rounded-lg relative h-[500px]">
      <h1 className="text-4xl text-center font-merienda">The Compelling Website of</h1>
      <div>
        <Image
          src="/NameSign.png"
          alt="Hero Image"
          fill
          className="absolute top-0 left-0 w-full h-full rounded-lg"
        />
      </div>
    </div>
  )
}