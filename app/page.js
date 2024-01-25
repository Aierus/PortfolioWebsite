import Image from 'next/image'
import Graph from "@/js/force"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-neutral-200 dark:bg-gray-800">
      <div className="w-full items-center justify-between font-mono text-sm dark:from-inherit text-black dark:text-white">
        <div className="flex left-0 top-0 flex w-full justify-center border-b border-gray-300 from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-slate-700 dark:from-inherit">
          <p className="font-mono font-bold text-lg">Andrew R. Clark</p>
        </div>
      </div>

      <div className="flex justify-start">
        <Graph />
      </div>


      <div className="items-center justify-between">
        <div className="z-10 text-left items-center justify-between font-mono text-lg px-6 pb-4 text-black dark:text-white">
          <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl text-black dark:text-white">
            My website
          </h1>
          <div className="items-center text-left font-mono max-w-5xl mx-auto dark:text-white">
            <p className="text-md">
              Hello, my name is Andrew Clark and I&apos;m a senior at Boston College. I have the skills of a software engineer, a web developer, and a systems adminstrator. I&apos;m actively involved in developing blockchain and web3 technology. Recently, I&apos;ve been studying AI development tools to further my understanding of one the most exciting fields in computer science.
            </p>
          </div>
        </div>

        <div className="w-screen bg-neutral-300 dark:bg-gray-800 border-t">
          <div className="z-10 items-center text-center justify-between font-mono text-lg py-4 px-6 dark:text-white">
            <h3 className="text-left mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl dark:text-white">
              Projects
            </h3>

            <div className="max-w-5xl mx-auto bg-white dark:bg-gray-700 p-4 rounded-md shadow-md flex flex-col md:flex-row mb-4 text-black dark:text-white">
              <a className="w-full md:w-1/2 h-auto md:h-auto mb-4 md:mb-0 text-2xl" href="https://bcprintmonitor.com" target="_blank">bcprintmonitor.com
                <Image
                  src="/bcprintmonitor.png"
                  width={500}
                  height={500}
                  alt="Preview of bcprintmonitor.com"
                  className="w-auto mt-3"

                />
              </a>
              <div className="md:w-1/2 md:pl-4 md:mt-0 mt-4 lg:px-6 lg:pt-12 text-left">
                Devised and implemented an API for interfacing with Boston College&apos;s existing printer system and HP’s Printer interface. Used scrapy to collect data, connected FastAPI data stream to a MongoDB database, and wrote a front-end in React JS to display data.

              </div>
            </div>


            <div className="max-w-5xl mx-auto bg-white dark:bg-gray-700 p-4 rounded-md shadow-md flex flex-col md:flex-row mb-4 text-black dark:text-white">
              <a className="w-full md:w-1/2 h-auto md:h-auto mb-4 md:mb-0 text-2xl" href="https://www.youtube.com/watch?v=N8bI3hNCgMo" target="_blank">AJsList Web3 Marketplace
                <Image
                  src="/ajslist.png"
                  width={500}
                  height={500}
                  alt="Preview of AJsList Web3 Marketplace"
                  className="w-auto mt-3"
                />
              </a>
              <div className="md:w-1/2 md:pl-4 md:mt-0 mt-4 lg:px-6 lg:pt-6 text-left">
                A crypto-enabled web app that connects local buyers to local sellers to exchange used goods. Coded front-end, back-end, and Solidity smart contracts to facilitate intuitive user experience. Voted best final project in CSCI3359 Distributed Systems
              </div>
            </div>

            <div className="max-w-5xl mx-auto bg-white dark:bg-gray-700 p-4 rounded-md shadow-md flex flex-col md:flex-row mb-4 text-black dark:text-white">
              <a className="w-full md:w-1/2 h-auto md:h-auto mb-4 md:mb-0 text-2xl" href="https://github.com/symblelang/compiler/tree/main" target="_blank">Symble Lang
                <Image
                  src="/symble.png"
                  width={500}
                  height={500}
                  alt="Preview of bcprintmonitor.com"
                  className="w-auto mt-3"
                />
              </a>
              <div className="md:w-1/2 md:pl-4 md:mt-0 mt-4 lg:px-6 lg:pt-8 text-left">
                A fully-fledged compiler for a novel programming language, created using a custom-made lexical and syntax analyzer, then interfacing with the LLVM-C API, compiling our language to C then assembly.
              </div>
            </div>

          </div>
        </div>

      </div>

      <div className="w-screen dark:bg-gray-800 border-t">
        <div className="z-10 items-center text-center justify-between font-mono text-lg px-6 pt-4 text-black dark:text-white">
          <h3 className="text-left mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl dark:text-white">
            Skills
          </h3>

          <div className="grid grid-cols-3 gap-4 p-8">
            <div className="bg-white dark:bg-gray-700 p-4 shadow-md rounded-md flex flex-col items-center justify-center transition-transform transform hover:scale-105">
              <span className="text-lg font-bold">Javascript</span>
            </div>

            <div className="bg-white dark:bg-gray-700 p-4 shadow-md rounded-md flex flex-col items-center justify-center transition-transform transform hover:scale-105">
              <span className="text-lg font-bold">Python</span>
            </div>

            <div className="bg-white dark:bg-gray-700 p-4 shadow-md rounded-md flex flex-col items-center justify-center transition-transform transform hover:scale-105">
              <span className="text-lg font-bold">C++</span>
            </div>

            <div className="bg-white dark:bg-gray-700 p-4 shadow-md rounded-md flex flex-col items-center justify-center transition-transform transform hover:scale-105">
              <span className="text-lg font-bold">Solidity</span>
            </div>

            <div className="bg-white dark:bg-gray-700 p-4 shadow-md rounded-md flex flex-col items-center justify-center transition-transform transform hover:scale-105">
              <span className="text-lg font-bold">Java</span>
            </div>

            <div className="bg-white dark:bg-gray-700 p-4 shadow-md rounded-md flex flex-col items-center justify-center transition-transform transform hover:scale-105">
              <span className="text-lg font-bold">Go</span>
            </div>

            <div className="bg-white dark:bg-gray-700 p-4 shadow-md rounded-md flex flex-col items-center justify-center transition-transform transform hover:scale-105">
              <span className="text-lg font-bold">Docker</span>
            </div>

            <div className="bg-white dark:bg-gray-700 p-4 shadow-md rounded-md flex flex-col items-center justify-center transition-transform transform hover:scale-105">
              <span className="text-lg font-bold">Linux</span>
            </div>

            <div className="bg-white dark:bg-gray-700 p-4 shadow-md rounded-md flex flex-col items-center justify-center transition-transform transform hover:scale-105">
              <span className="text-lg font-bold">AI/ML</span>
            </div>
          </div>
        </div>

      </div>
    </main >
  )
}
