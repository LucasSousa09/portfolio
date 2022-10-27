import logoImg  from '../assets/logo.svg'
import { CaretDown } from "phosphor-react";
import { RefObject } from 'react';

interface HomeProps{
  homeContainer: RefObject<HTMLDivElement>
}

export function Home({ homeContainer }: HomeProps){
  return (
    <div id="home" className="relative max-w-[1400px] mx-auto z-10 sm:flex sm:items-center sm:justify-center sm:h-[calc(100vh-88px)] md:block md:min-h-[600px] md:h-[calc(100vh-92px)]" ref={homeContainer}> 
      <div className="flex flex-col font-bold text-zinc-800 sm:mt-[-124px] sm:gap-2 sm:pt-16 sm:px-3 sm:text-3xl sm:text-center sm:items-center md:gap-4 md:max-w-[750px] md:pt-44 md:mt-0 md:px-20 md:text-5xl md:items-start md:text-left lg:pt-52 lg:gap-8 lg:text-6xl">
        <h1 className="animate-descent z-50">Dev frontend</h1>
        <h1 className="leading-relaxed animate-[descent_2s_2s_forwards] opacity-0 z-50">Helping you to give your designs life!</h1>
        <a href="#my-works" className="flex items-start gap-3 font-semibold animate-[descent_2s_4s_forwards] opacity-0 z-10 sm:text-zinc-600 sm:mt-14 sm:text-lg md:text-2xl md:mt-28 lg:text-3xl lg:text-zinc-400 lg:mt-32">
          Get it to know my work!
          <CaretDown weight="bold" className="motion-safe:animate-[bounce_1.2s_6s_infinite] sm:h-8 sm:w-8 md:h-10 md:w-10 lg:h-12 lg:w-12"/>
        </a>
      </div>

      <div className="absolute animate-turningVisible opacity-0 sm:right-[50%] sm:translate-x-[50%] sm:top-[50%] sm:translate-y-[calc(-50%-88px)] md:top-32 md:translate-y-0 lg:top-16 md:right-20 md:translate-x-0">
        <img src={logoImg} className="sm:h-[300px] md:h-[475px] lg:h-[600px]" />
      </div>
    </div>
  )
}