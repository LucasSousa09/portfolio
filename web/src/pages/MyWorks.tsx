import axios from 'axios'
import { useEffect, useRef, useState } from 'react';

import { Heading } from '../components/Heading';
import { WorkCard } from "../components/WorkCard";
import { PageContainer } from '../components/PageContainer';
import { SliderButtonRight, SliderButtonLeft } from '../components/SliderButton';

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
    <PageContainer id="my-works">
      <Heading title="My Work's"/>
      <div className="relative">
        <SliderButtonLeft handleClick={handleLeftClick} />
        <div className="flex scroll-smooth sm:flex-col md:flex-row justify-between gap-8 p-4 overflow-x-scroll scrollbar-hide relative" ref={caroussel}>
          {
            works.map(work => <WorkCard key={work.id} workLink={work.projectUrl} altAttribute={work.title} imgSrc={work.bannerUrl} workDescription={work.description} /> )
          }
        </div>
        <SliderButtonRight handleClick={handleRightClick} />
      </div>

    </PageContainer>
  )
}