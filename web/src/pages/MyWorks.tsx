import axios from 'axios'
import { RefObject, useEffect, useRef, useState } from 'react';

import { Heading } from '../components/Heading';
import { WorkCard } from "../components/WorkCard";
import { PageContainer } from '../components/PageContainer';
import { SliderButtonRight, SliderButtonLeft } from '../components/SliderButton';

interface MyWorkProps {
  myWorksContainerRef: RefObject<HTMLDivElement>
}

interface WorkProps {
  id: string,
  title: string,
  bannerUrl: string,
  description: string,
  projectUrl: string
}

export function MyWorks({ myWorksContainerRef }: MyWorkProps){
  const [works, setWorks] = useState<WorkProps[]>([])

  // useEffect(() => {
  //   axios('http://localhost:3333/works')
  //   .then(response => setWorks(response.data))
  // },[])

  const myWorks = [
    {
      id: "1",
      title: "todo",
      bannerUrl: "https://i.ibb.co/KFfFpWC/todo.png",
      description: "A simple to-do application. Build with React and stylized with CSS modules.",
      projectUrl: "https://portifolio-todo-app.netlify.app/"
    },
    {
      id: "2",
      title: "worldTrip",
      bannerUrl: "https://i.ibb.co/D7Yb7f3/worldtrip.png",
      description: "A Bootcamp Challenge. Build on NextJS, Typescript, and Chakra-UI. A responsive website to show off frontend skills.",
      projectUrl: "https://worldtrip-azure.vercel.app/"
    },
    {
      id: "3",
      title: "agoraEComVoce",
      bannerUrl: "https://i.ibb.co/3YjBNwm/agoraecomvoce.png",
      description: "My first website. Build on HTML, CSS, Javascript, and Backend on NodeJs and MongoDB as the database.",
      projectUrl: "https://agoraecomvoce.herokuapp.com"
    }
]

  useEffect(() => {
    setWorks(myWorks)
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
    <PageContainer id="my-works" pageContainerRef={myWorksContainerRef}>
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