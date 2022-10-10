import { CaretCircleLeft, CaretCircleRight } from 'phosphor-react'

interface SliderButton {
  handleClick: () => void,
}

export function SliderButtonRight({handleClick}: SliderButton){
  return (
    <button onClick={handleClick} className="absolute text-blue-800 top-[50%] translate-y-[-50%] right-[-42px] w-10 h-10 shadow-lg rounded-full hover:h-11 hover:w-11 z-10 lg:hidden">
      <CaretCircleRight className="w-full h-full"/>
    </button>
  )
}

export function SliderButtonLeft({handleClick}: SliderButton){
  return (
    <button onClick={handleClick} className="absolute text-blue-800 top-[50%] translate-y-[-50%] left-[-42px] w-10 h-10 shadow-lg rounded-full hover:h-11 hover:w-11 z-10 lg:hidden">
      <CaretCircleLeft className="w-full h-full"/>
    </button>
  )
}

