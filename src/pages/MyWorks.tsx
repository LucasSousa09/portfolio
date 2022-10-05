import { useRef } from 'react';

import { CaretCircleLeft, CaretCircleRight } from 'phosphor-react'

import { WorkCard } from "../components/WorkCard";
import { SliderButtonRight, SliderButtonLeft } from '../components/SliderButton';

import logoPurpleSmall  from '../assets/logoPurpleSmall.svg'

export function MyWorks(){

  const caroussel = useRef<HTMLDivElement>(null)

  function handleRightClick(){
    if(caroussel.current !== null){
      caroussel.current.scrollLeft = 50
    }
  }
  
  function handleLeftClick(){
    if(caroussel.current !== null){
      caroussel.current.scrollLeft = 0
    }
  }

  return (
    <div className="flex flex-col md:mx-12 lg:mx-14 xl:mx-auto xl:max-w-[1148px]" >
      <header className="relative md:my-16 lg:my-20">
        <img src={logoPurpleSmall} alt="Logo but Smaller and purple" className="absolute top-[50%] translate-y-[-50%] left-0 md:h-24    "/>
        <strong className="flex text-blue-900 md:pl-9 lg:pl-11 md:text-3xl lg:text-4xl">My Work's</strong>
      </header>

      <div className="relative">
        <SliderButtonLeft handleClick={handleLeftClick} />
        <div className="flex justify-between gap-8 overflow-x-scroll scrollbar-hide relative" ref={caroussel}>
          <WorkCard />
          <WorkCard />
          <WorkCard />
        </div>
        <SliderButtonRight handleClick={handleRightClick} />
      </div>

    </div>
  )
}




















//https://novelfull.com/my-wife-is-a-beautiful-ceo/chapter-344-embarrassment.html