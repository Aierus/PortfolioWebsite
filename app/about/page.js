export default function About() {
  return (

    <main className="flex min-h-screen flex-col items-center bg-neutral-200 dark:bg-gray-800">
      <div className="w-full items-center justify-between font-mono text-sm dark:from-inherit text-black dark:text-white">
        <div className="flex left-0 top-0 flex w-full justify-center border-b border-gray-300 from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-slate-700 dark:from-inherit">
          <code className="font-mono font-bold text-lg">About me</code>
        </div>
        <div className="z-10 text-left items-center justify-between font-mono text-lg px-6 pb-4 text-black dark:text-white py-6">
          <p className="py-4">Currently a student at Boston College. Formerly a student at The Peddie School in Hightstown, NJ.</p>
          <p className="py-4">I&apos;m studying computer science along with a diverse liberal arts education. I am also taking a Russian minor and am learning the Russian language to read original versions of Tolstoy and Doestoevsky. Over my time at BC I have built a repertoire of full-stack development tools - working in JS, Go, Python, Java, and learning functional programming in OCaml. I have worked on low-level projects, building a compiler from scratch and working with operating systems. I have also created high-level applications, one being the <a className="inline font-semibold underline decoration-indigo-500" href="https://bcprintmonitor.com">BC Print Monitor</a> that I created to help my fellow coworkers at the library help desk. I also created a new website for the <a className="inline font-semibold underline decoration-indigo-500" href="https://bcblockchain.org/">BC Blockchain club.</a></p>
          <p className="py-4">A passion for finance has led me to developing a <a className="inline font-semibold underline decoration-indigo-500" href="https://github.com/Aierus/stockscreener">stock market screener</a> and trading bot and learning the fundamentals of finance. My fields of interest are in Web Development, Cryptocurrency, Networking, Cybersecurity, Mobile App Development, and Statistics.</p>
          <p className="py-4">I also take pride in my passion for literature - I always have a book with me and am currently reading Ulysses by James Joyce.</p>
        </div>
      </div>
    </main>
  )

}
