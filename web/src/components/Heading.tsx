import logoPurpleSmall  from '../assets/logoPurpleSmall.svg'

interface HeadingProps{
    title: string,
}

export function Heading({title}: HeadingProps){
  return (
    <header className="flex sm:justify-center md:justify-start sm:my-8 md:my-16 lg:my-20">
      <div className="relative">
        <img src={logoPurpleSmall} alt="Logo but Smaller and purple" className="absolute top-[50%] translate-y-[-50%] left-0 sm:h-20 md:h-24"/>
        <strong className="flex text-main-500 sm:pl-7 md:pl-9  sm:text-2xl md:text-3xl lg:text-4xl z-20">{title}</strong>
      </div>
    </header>
  )
}