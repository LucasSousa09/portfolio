import axios from 'axios'
import { useEffect, useRef, useState } from 'react';

import { WorkCard } from "../components/WorkCard";
import { SliderButtonRight, SliderButtonLeft } from '../components/SliderButton';

import logoPurpleSmall  from '../assets/logoPurpleSmall.svg'

interface WorkProps {
  id: string,
  title: string,
  bannerUrl: string,
  description: string,
  projectUrl: string
}

export function MyWorks(){
  const [works, setWorks] = useState<WorkProps[]>([])

  useEffect(() => {
    axios('http://localhost:3333/works')
    .then(response => setWorks(response.data))
  },[])

  const caroussel = useRef<HTMLDivElement>(null)


  function handleRightClick(){
    if(caroussel.current !== null){
      caroussel.current.scrollLeft += (caroussel.current.clientWidth / 2)
    }
  }
  
  function handleLeftClick(){
    if(caroussel.current !== null){
      caroussel.current.scrollLeft -= (caroussel.current.clientWidth / 2)
    }
  }

  return (
    <div id="my-works" className="snap-start flex flex-col sm:pt-[88px] md:pt-0 md:h-[calc(100vh-92px)] sm:mx-8 md:mx-12 lg:mx-14 xl:mx-auto xl:max-w-[1148px]" >
      <header className="flex sm:justify-center md:justify-start sm:my-8 md:my-16 lg:my-20">
        <div className="relative">
          <img src={logoPurpleSmall} alt="Logo but Smaller and purple" className="absolute top-[50%] translate-y-[-50%] left-0 sm:h-20 md:h-24 "/>
          <strong className="flex text-blue-900 sm:pl-7 md:pl-9  sm:text-2xl md:text-3xl lg:text-4xl">My Work's</strong>
        </div>
      </header>

      <div className="relative">
        <SliderButtonLeft handleClick={handleLeftClick} />
        <div className="flex scroll-smooth sm:flex-col md:flex-row justify-between gap-8 p-4 overflow-x-scroll scrollbar-hide relative" ref={caroussel}>
          {
            works.map(work => <WorkCard key={work.id} workLink={work.projectUrl} altAttribute={work.title} imgSrc={work.bannerUrl} workDescription={work.description} /> )
          }
        </div>
        <SliderButtonRight handleClick={handleRightClick} />
      </div>

    </div>
  )
}