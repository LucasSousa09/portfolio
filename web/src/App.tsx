import { useState, useEffect, useRef } from 'react'

import { Header } from "./components/Header";

import { HireMe } from "./pages/HireMe";
import { MyWorks } from './pages/MyWorks'
import { AboutMe } from "./pages/AboutMe";
import { Home } from "./pages/Home";

export function App() {
  const [currentOffsetTop, setCurrentOffsetTop] = useState(0)
  
  const container = useRef<HTMLDivElement>(null)
  const homeContainer = useRef<HTMLDivElement>(null)
  const aboutMeContainerRef = useRef<HTMLDivElement>(null)
  const myWorksContainerRef = useRef<HTMLDivElement>(null)
  const hireMeContainerRef = useRef<HTMLDivElement>(null)

  function handleOnScroll() {
    console.log(aboutMeContainerRef.current?.offsetTop)
  }

  return (
    <div className="sm:mt-[88px] md:mt-[92px] sm:h-[calc(100vh-88px)] md:h-[calc(100vh-92px)] overflow-y-scroll scroll-smooth" ref={container} onScroll={handleOnScroll}>
      <Header />
      <Home homeContainer={homeContainer} />
      <AboutMe aboutMeContainerRef={aboutMeContainerRef}/>
      <MyWorks myWorksContainerRef={myWorksContainerRef} />
      <HireMe hireMeContainerRef={hireMeContainerRef}/>
    </div>
  )
}