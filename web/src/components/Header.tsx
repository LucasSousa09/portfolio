import { List, XCircle } from 'phosphor-react' 
import { useState } from 'react'

export function Header(){
  const [navHidden, setNavHidden] = useState('hidden')

  function handleClick(){
    if(navHidden === 'hidden'){
      setNavHidden('')
    }
    else{
      setNavHidden('hidden')
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-20 flex w-full items-center justify-between sm:px-10 sm:py-8 lg:px-16 bg-zinc-800 text-zinc-100" >
       <strong className="font-bold sm:text-base md:text-xl">Lucas Rodrigues</strong>
       <button className="md:hidden" onClick={handleClick}>
        <List className="text-zinc-100 h-5 w-5" />
       </button>
       {
        navHidden ? (
          <nav className={`flex sm:absolute sm:top-0 sm:right-0 sm:bottom-0 sm:h-[100vh] sm:w-[200px] sm:flex-col sm:items-end sm:pt-6 sm:px-4 sm:bg-zinc-700 sm:hidden md:flex-row md:p-0 sm:gap-6 md:block md:static  md:h-auto md:w-auto md:bg-zinc-800 z-50`}>
            {
              navHidden !== 'hidden' && (
              <button onClick={handleClick}> 
                <XCircle className='text-zinc-400' size={32}/> 
              </button>
              )
            }
            <ul className="flex justify-between font-medium text-zinc-400 sm:flex-col sm:gap-6 sm:w-full md:flex-row md:gap-0 md:w-[400px] md:text-sm lg:w-[450px] lg:text-base">
              <li className="hover:text-zinc-50 sm:border-b-2 sm:border-zinc-600 sm:w-full sm:text-end md:border-0"> <a href="#home"> Home </a> </li>
              <li className="hover:text-zinc-50 sm:border-b-2 sm:border-zinc-600 sm:w-full sm:text-end md:border-0"> <a href="#about-me"> About Me </a> </li>
              <li className="hover:text-zinc-50 sm:border-b-2 sm:border-zinc-600 sm:w-full sm:text-end md:border-0"> <a href="#my-works"> My work's </a> </li>
              <li className="hover:text-zinc-50 sm:border-b-2 sm:border-zinc-600 sm:w-full sm:text-end md:border-0"> <a href="#hire-me"> Hire me </a> </li>
            </ul>
          </nav>
        ) : (
          <nav className={`z-50 flex sm:absolute sm:top-0 sm:right-0 sm:bottom-0 sm:flex-col sm:items-end sm:pt-6 sm:px-4 sm:gap-6 sm:h-[100vh] sm:w-[200px] sm:bg-zinc-700 md:p-0 md:static md:flex-row md:h-auto md:w-auto md:bg-zinc-800`}>
            {
              navHidden !== 'hidden' && (
              <button onClick={handleClick}> 
                <XCircle className='text-zinc-400' size={32}/> 
              </button>
              )
            }
            <ul className="flex sm:flex-col sm:gap-6 sm:w-full md:flex-row md:gap-0 md:w-[300px] md:text-sm lg:text-base justify-between font-medium text-zinc-400">
              <li className="hover:text-zinc-50 sm:border-b-2 sm:border-zinc-600 sm:w-full sm:text-end md:border-0"> <a onClick={handleClick} href="#home"> Home </a> </li>
              <li className="hover:text-zinc-50 sm:border-b-2 sm:border-zinc-600 sm:w-full sm:text-end md:border-0"> <a onClick={handleClick} href="#about-me"> About Me </a> </li>
              <li className="hover:text-zinc-50 sm:border-b-2 sm:border-zinc-600 sm:w-full sm:text-end md:border-0"> <a onClick={handleClick} href="#my-works"> My work's </a> </li>
              <li className="hover:text-zinc-50 sm:border-b-2 sm:border-zinc-600 sm:w-full sm:text-end md:border-0"> <a onClick={handleClick} href="#hire-me"> Hire me </a> </li>
            </ul>
          </nav>
        )
       }
    </header>
  )
}
