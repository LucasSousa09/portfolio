import { List } from 'phosphor-react' 

export function Header(){
  return (
    <header className="flex w-full items-center justify-between sm:px-10 sm:py-8 lg:px-16 bg-zinc-800 text-zinc-100">
       <strong className="font-bold sm:text-base md:text-xl">Lucas Rodrigues</strong>
       <button className="md:hidden">
        <List className="text-zinc-100 h-5 w-5" />
       </button>
       <nav className="sm:hidden md:block">
        <ul className="flex md:w-[300px] md:text-sm lg:text-base justify-between font-medium text-zinc-400">
          <li className="hover:text-zinc-50"> <a href="#"> My work's </a> </li>
          <li className="hover:text-zinc-50"> <a href="#"> My skill's </a> </li>
          <li className="hover:text-zinc-50"> <a href="#"> Hire me </a> </li>
        </ul>
       </nav>
    </header>
  )
}