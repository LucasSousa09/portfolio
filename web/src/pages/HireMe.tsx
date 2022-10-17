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
          <p className="pb-12">
            Feel free to contact me any time, through any method bellow 
          </p>
          <div className="grid grid-cols-2 gap-20">
            <form className="flex flex-col">
              <Label labelFor="name" labelName="Name"/>
              <Input name="name" type="text" />

              <Label labelFor="email" labelName="E-mail"/>
              <Input name="email" type="email" />

              <Label labelFor="message" labelName="Message"/>
              <Input name="message" type="text" variant="big"/>
            </form>
            <div>
              <SocialLink imgSrc={githubIcon} altAtb='Github Icon' linkUrl="https://github.com/LucasSousa09/"   />
              <SocialLink imgSrc={linkedinIcon} altAtb='Linkedin Icon' linkUrl="https://www.linkedin.com/in/lucas-rodrigues-4892901b4/"   />
              <SocialLink imgSrc={envelopIcon} altAtb='Envelop Icon' linkUrl="https://mail.google.com/" linkShown="lucasrodrigues.sousa09@gmail.com" />
            </div>
          </div>
        </div>
    </PageContainer>
  )
}