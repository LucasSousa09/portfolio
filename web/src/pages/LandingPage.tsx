import logoImg  from '../assets/logo.svg'
import { CaretDown } from "phosphor-react";

export function LandingPage(){
  return (
    <div id="landing" className="relative z-10 sm:flex sm:items-center sm:justify-center sm:h-[calc(100vh-88px)] md:block md:h-[calc(100vh-92px)] max-w-[1400px] mx-auto"> 
      <div className="flex flex-col font-bold text-zinc-800 sm:mt-[-88px] sm:gap-6 md:gap-8 lg:gap-10 sm:pt-16 md:pt-44 md:mt-0 lg:pt-52 sm:px-3 md:px-20 sm:text-3xl sm:text-center sm:items-center md:text-5xl md:items-start md:text-left lg:text-6xl">
        <h1 className="animate-descent z-50">Solid  and Simple!</h1>
        <h1 className="leading-relaxed animate-[descent_2s_2s_forwards] opacity-0 z-50">A Refreshing Web Experience!</h1>
        <a href="#my-works" className="flex items-start gap-3 sm:text-zinc-600 lg:text-zinc-400 font-semibold sm:text-lg md:text-2xl lg:text-3xl animate-[descent_2s_4s_forwards] opacity-0 sm:mt-14 md:mt-28 lg:mt-32 z-10">
          Get it to know my work!
          <CaretDown weight="bold" className="sm:h-8 sm:w-8 md:h-10 md:w-10 lg:h-12 lg:w-12 motion-safe:animate-[bounce_1.2s_6s_infinite]"/>
        </a>
      </div>

      <div className="absolute sm:right-[50%] sm:translate-x-[50%] sm:top-[50%] sm:translate-y-[calc(-50%-88px)] md:top-32 md:translate-y-0 lg:top-16 md:right-20 md:translate-x-0 animate-turningVisible opacity-0">
        <img src={logoImg} className="sm:h-[300px] md:h-[475px] lg:h-[600px]" />
      </div>
    </div>
  )
}