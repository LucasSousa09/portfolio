import { FormEvent, RefObject, useState } from 'react'

import axios from 'axios'

import { Label } from '../components/Label'
import { Input } from '../components/Input'
import { Heading } from '../components/Heading'
import { SocialLink } from '../components/SocialLink'
import { PageContainer } from '../components/PageContainer'

import envelopIcon from '../assets/socialinks/envelope.svg'
import githubIcon from '../assets/socialinks/githubicon.svg'
import linkedinIcon from '../assets/socialinks/linkedinicon.svg'

interface HireMeProps {
  hireMeContainerRef: RefObject<HTMLDivElement>
}

export function HireMe({ hireMeContainerRef }: HireMeProps){
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [errorMessage, setErrorMessage] = useState('')


  function handleSubmit(evt: FormEvent){
    evt.preventDefault()

    axios.post('http://localhost:3333/mail',{name, email, message})
      .then(response => console.log(response.data))
      .catch(err => setErrorMessage(`Sorry the message was not successfully send. ERROR MESSAGE: ${err.message}`))
  }

  function handleErrorMessage(){
    setTimeout(() => setErrorMessage(''), 5000)
    return <p className="bg-red-600 text-center text-white font-semibold mt-4 px-4 py-2 rounded">{errorMessage}</p>
  }

  return (
    <PageContainer id="hire-me" pageContainerRef={hireMeContainerRef}>
        <Heading title="Hire Me" />
        <div className="text-main-700">
          <p className="text-red-600 font-medium mb-4 sm:text-sm md:text-base">The platform email sending is still not functional, please use the other methods bellow </p>
          <p className="sm:text-sm sm:pb-5 md:text-base md:pb-12">
            Feel free to contact me any time, through any method bellow 
          </p>
          <div className="2md:grid 2md:grid-cols-2 2md:gap-12 2md:justify-start lg:gap-20">
            <form onSubmit={handleSubmit} className="flex flex-col">
              <Label labelFor="name" labelName="Name"/>
              <Input name="name" type="text" onChange={evt => setName(evt.target.value)} required />

              <Label labelFor="email" labelName="E-mail"/>
              <Input name="email" type="email" required onChange={evt => setEmail(evt.target.value)} />

              <Label labelFor="message" labelName="Message"/>
              <textarea name="message" className="w-full h-44 px-4 py-4 mb-6 bg-main-100 rounded outline-1 outline-main-500 text-main-500" onChange={evt => setMessage(evt.target.value)} />


              <button className="bg-main-500 text-zinc-50 rounded font-bold py-3 sm:w-full sm:text-sm md:w-28 md:text-base" type="submit">Send it!</button>
              {
                errorMessage !== '' && handleErrorMessage()
              }
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