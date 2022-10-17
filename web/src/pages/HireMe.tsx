import { Label } from '../components/Label'
import { Input } from '../components/Input'
import { Heading } from '../components/Heading'
import { SocialLink } from '../components/SocialLink'
import { PageContainer } from '../components/PageContainer'

import envelopIcon from '../assets/socialinks/envelope.svg'
import githubIcon from '../assets/socialinks/githubicon.svg'
import linkedinIcon from '../assets/socialinks/linkedinicon.svg'

export function HireMe(){
  return (
    <PageContainer id="hire-me">
        <Heading title="Hire Me" />
        <div className="text-main-700">
          <p className="sm:text-sm sm:pb-5 md:text-base md:pb-12">
            Feel free to contact me any time, through any method bellow 
          </p>
          <div className="2md:grid 2md:grid-cols-2 2md:gap-12 2md:justify-start lg:gap-20">
            <form className="flex flex-col">
              <Label labelFor="name" labelName="Name"/>
              <Input name="name" type="text" required />

              <Label labelFor="email" labelName="E-mail"/>
              <Input name="email" type="email" required />

              <Label labelFor="message" labelName="Message"/>
              <textarea name="message" className="w-full h-44 bg-main-100 rounded outline-1 outline-main-500 px-4 py-4 mb-6 text-main-500" />


              <button className="bg-main-500 text-zinc-50 rounded font-bold py-3 sm:w-full sm:text-sm md:w-28 md:text-base" type="submit">Send it!</button>
            </form>
            <div className="flex flex-col gap-6 my-10">
              <SocialLink imgSrc={githubIcon} altAtb='Github Icon' linkUrl="https://github.com/LucasSousa09/"   />
              <SocialLink imgSrc={linkedinIcon} altAtb='Linkedin Icon' linkUrl="https://www.linkedin.com/in/lucas-rodrigues-4892901b4/"   />
              <SocialLink imgSrc={envelopIcon} altAtb='Envelop Icon' linkUrl="https://mail.google.com/" linkShown="lucasrodrigues.sousa09@gmail.com" />
            </div>
          </div>
        </div>
    </PageContainer>
  )
}