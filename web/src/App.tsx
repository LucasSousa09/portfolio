import { useState, useEffect, useRef } from 'react'

import { Header } from "./components/Header";

import { HireMe } from "./pages/HireMe";
import { MyWorks } from './pages/MyWorks'
import { AboutMe } from "./pages/AboutMe";
import { Home } from "./pages/Home";

type CurrentPageProps = "home" | "aboutMe" | "myWorks" | "hireMe"


export function App() {
  const [currentPageNav, setCurrentPageNav] = useState<CurrentPageProps>("home")
  
  const container = useRef<HTMLDivElement>(null)
  const homeContainer = useRef<HTMLDivElement>(null)
  const aboutMeContainerRef = useRef<HTMLDivElement>(null)
  const myWorksContainerRef = useRef<HTMLDivElement>(null)
  const hireMeContainerRef = useRef<HTMLDivElement>(null)

  function handleOnScroll() {
    if(container.current !== null || aboutMeContainerRef.current !== null || homeContainer.current || myWorksContainerRef.current || hireMeContainerRef.current ){
      const containerScrollTop = container.current?.scrollTop || 0
      const aboutMeTop = aboutMeContainerRef.current?.offsetTop || 0
      const myWorksTop = myWorksContainerRef.current?.offsetTop || 0
      const hireMeTop = hireMeContainerRef.current?.offsetTop   || 0

      if(containerScrollTop < aboutMeTop-93){
        setCurrentPageNav("home")
      }
      else if(containerScrollTop >= aboutMeTop-93 && containerScrollTop < myWorksTop-93){
        setCurrentPageNav("aboutMe")
      }
      else if(containerScrollTop >= myWorksTop-93 && containerScrollTop < hireMeTop-93){
        setCurrentPageNav("myWorks")
      }
      else if(containerScrollTop >= hireMeTop-100){
        setCurrentPageNav("hireMe")
      }
    }
  }

  return (
    <div className="sm:mt-[88px] md:mt-[92px] sm:h-[calc(100vh-88px)] md:h-[calc(100vh-92px)] overflow-y-scroll scroll-smooth" ref={container} onScroll={handleOnScroll}>
      <Header currentPageNav={currentPageNav} />
      <Home homeContainer={homeContainer} />
      <AboutMe aboutMeContainerRef={aboutMeContainerRef}/>
      <MyWorks myWorksContainerRef={myWorksContainerRef} />
      <HireMe hireMeContainerRef={hireMeContainerRef}/>
    </div>
  )
}