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
          <nav className={`flex sm:flex-col md:flex-row sm:items-end sm:pt-6 sm:px-4 md:p-0 sm:gap-6 sm:hidden md:block sm:absolute sm:top-0 sm:right-0 sm:bottom-0 md:static sm:h-[100vh] md:h-auto sm:w-[200px] md:w-auto sm:bg-zinc-700 md:bg-zinc-800 z-50`}>
            {
              navHidden !== 'hidden' && (
              <button onClick={handleClick}> 
                <XCircle className='text-zinc-400' size={32}/> 
              </button>
              )
            }
            <ul className="flex sm:flex-col md:flex-row sm:gap-6 md:gap-0 sm:w-full md:w-[300px] md:text-sm lg:text-base justify-between font-medium text-zinc-400">
              <li className="hover:text-zinc-50 sm:border-b-2 md:border-0 sm:border-zinc-600 sm:w-full sm:text-end"> <a href="#"> About Me </a> </li>
              <li className="hover:text-zinc-50 sm:border-b-2 md:border-0 sm:border-zinc-600 sm:w-full sm:text-end"> <a href="#my-works"> My work's </a> </li>
              <li className="hover:text-zinc-50 sm:border-b-2 md:border-0 sm:border-zinc-600 sm:w-full sm:text-end"> <a href="#"> Hire me </a> </li>
            </ul>
          </nav>
        ) : (
          <nav className={`sm:flex-col md:flex-row sm:items-end sm:pt-6 sm:px-4 md:p-0 sm:gap-6 sm:flex md:flex sm:absolute sm:top-0 sm:right-0 sm:bottom-0 md:static sm:h-[100vh] md:h-auto sm:w-[200px] md:w-auto sm:bg-zinc-700 md:bg-zinc-800 z-50`}>
            {
              navHidden !== 'hidden' && (
              <button onClick={handleClick}> 
                <XCircle className='text-zinc-400' size={32}/> 
              </button>
              )
            }
            <ul className="flex sm:flex-col md:flex-row sm:gap-6 md:gap-0 sm:w-full md:w-[300px] md:text-sm lg:text-base justify-between font-medium text-zinc-400">
              <li className="hover:text-zinc-50 sm:border-b-2 md:border-0 sm:border-zinc-600 sm:w-full sm:text-end"> <a href="#"> About Me </a> </li>
              <li className="hover:text-zinc-50 sm:border-b-2 md:border-0 sm:border-zinc-600 sm:w-full sm:text-end"> <a href="#my-works"> My work's </a> </li>
              <li className="hover:text-zinc-50 sm:border-b-2 md:border-0 sm:border-zinc-600 sm:w-full sm:text-end"> <a href="#"> Hire me </a> </li>
            </ul>
          </nav>
        )
       }
    </header>
  )
}
