import Image from "next/image";

const About = () => {
  return (
    <div className="min-h-[600px]">
      <div className="container m-auto grid grid-cols-3 md:grid-cols-12 grid-rows-12 md:grid-rows-3 bg-gray-200 dark:bg-blue-800 p-5 mt-5 rounded-lg relative md:h-96">
        <div className="col-span-3 row-start-1 border-solid border-2 border-black bg-slate-400 h-[200px] relative">
          <Image
            src="/Jacques2.png"
            alt="Photo of Jacques Van Blokland"
            fill
            className="absolute object-cover top-0 left-0 w-full h-full rounded-lg"
          />
        </div>
        <div className="p-4 text-balance col-span-3 md:col-span-9 row-start-2 md:row-start-1 border-solid border-2 border-black rounded-lg h-[200px]">
          <h3>
            Professional builder of web applications. Check out my LinkedIn or
            my Resume for more info.
          </h3>
        </div>
        <div className="col-span-3 md:col-span-12 row-start-3 border-solid border-2 border-black rounded-lg h-[100%] p-2">
          <h3 className="text-center mt-2 font-bold">Links</h3>
          <div className="grid col-span-3 md:col-span-12 w-[80%] md:w-[100%] col-start-2 px-5 pt-2">
            <div className="col-start-2 md:col-start-1 md:col-end-3 col-span-1 text-center pb-2">
              <a href="https://www.linkedin.com/in/jacquesvb/">
                <div className="border border-black bg-slate-300 dark:bg-slate-600 p-2 rounded-lg font-bold">
                  LinkedIn
                </div>
              </a>
            </div>
            <div className="col-start-2 md:col-start-4 md:col-end-6 md:row-start-1 col-span-1 text-center pb-2">
              <a href="https://www.github.com/jacquesvb">
                <div className="border border-black bg-slate-300 dark:bg-slate-600 p-2 rounded-lg font-bold">
                  Github
                </div>
              </a>
            </div>
            <div className="col-start-2 md:col-start-7 md:col-end-9 col-span-1 text-center pb-2">
              <a href="https://drive.google.com/file/d/1j8tzj2oD5Wm6K6w7c1PoaoKhg4PQX3Xn/view?usp=sharing">
                <div className="border border-black bg-slate-300 dark:bg-slate-600 p-2 rounded-lg font-bold">
                  Resume
                </div>
              </a>
            </div>
            <div className="col-start-2 md:col-start-10 md:col-end-12 col-span-1 text-center pb-2">
              <a href="mailto:jacquesvb@live.com">
                <div className="border border-black bg-slate-300 dark:bg-slate-600 p-2 rounded-lg font-bold">
                  Email
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
