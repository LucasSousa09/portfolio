import { Atom } from "phosphor-react";
import { Heading } from "../components/Heading";
import { PageContainer } from "../components/PageContainer";

export function AboutMe(){
  return (
    <PageContainer id='about-me'>
      <Heading title="About Me"/>
      <div className="text-main-500 sm:text-sm sm:flex sm:flex-col sm:items-center sm:w-11/12 sm:mx-auto md:w-full 2md:grid 2md:grid-cols-2 2md:justify-items-center 2md:mt-16 2md:pl-12 2md:gap-12 lg:mt-8">
        <div className="flex flex-col indent-5 leading-7 font-medium lg:text-lg">
          <p>
            After deciding to change my career, I started to learn development around march 2020 by watching videos on Youtube. Around this time, I had my first contact with Rocketseat on the Next Level Week 2, and Proffy was my first web app.
          </p>
          <p>
            Following that, I made a website similar to a blog for my father (https://agoraecomvoce.herokuapp.com/).
          </p>
          <p>
            Then, I made a fast course on Udemy on HTML, CSS & Javascript (50 projects in 50 days - from Florin Pop e Brad Traversy).
          </p>
          <p>
            A while ago, I completed a Bootcamp on ReactJS from Rocketseat.
          </p>
          <p>
            And I am anxious to put my skills to work!
          </p>
        </div>
        <Atom className="sm:hidden 2md:block 2md:h-full 2md:w-full lg:h-96 lg:w-96 2md:hover:animate-spin"/>
      </div>
    </PageContainer>
  )
}