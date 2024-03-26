import Image from 'next/image';

const About = () => {
  return (
      <div className="min-h-[600px]">
        <div className="container m-auto grid md:grid-cols-3 md:grid-rows-3 gap-4 bg-gray-200 dark:bg-blue-800 p-5 mt-5 rounded-lg relative md:h-96">
          <div className="col-span-1 row-start-1 border-solid border-2 border-black bg-slate-400 h-[200px] relative">
            <Image
              src="/Jacques2.png"
              alt="Photo of Jacques Van Blokland"
              fill
              className="absolute object-cover top-0 left-0 w-full h-full rounded-lg"
            />
          </div>
          <div className="p-4 text-balance md:col-span-2 row-start-2 md:row-start-1 border-solid border-2 border-black rounded-lg h-[200px]">
            <h3>Professional builder of web applications. Check out my LinkedIn or my Resume for more info.</h3>
          </div>
          <div className="md:col-span-3 row-start-3 border-solid border-2 border-black rounded-lg h-[100px]">
            <h3 className="text-center mt-2 font-bold">Links to stuff</h3>
            <div className="flex flex-row place-content-evenly mt-2">
              <a href="https://www.linkedin.com/in/jacquesvb/">
                <div className="border border-black bg-slate-300 p-2 rounded-lg font-bold">
                  LinkedIn
                </div>
              </a>
              <a href="https://www.github.com/jacquesvb">
                <div className="border border-black bg-slate-300 p-2 rounded-lg font-bold">
                  Github
                </div>
              </a>
              <a href="https://drive.google.com/file/d/1j8tzj2oD5Wm6K6w7c1PoaoKhg4PQX3Xn/view?usp=sharing">
                <div className="border border-black bg-slate-300 p-2 rounded-lg font-bold">
                  Resume
                </div>
              </a>
              <a href="mailto:jacquesvb@live.com">
                <div className="border border-black bg-slate-300 p-2 rounded-lg font-bold">
                  Email Me
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
  )
}

export default About;