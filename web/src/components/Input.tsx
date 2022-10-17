import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    variant?: string,
}

export function Input({ variant, ...rest }: InputProps){
  return (
    <>
    {
      variant ?
      <input {...rest} className="w-full h-44 bg-main-100 rounded outline-1 outline-main-700 pl-4 mb-6 text-main-500" />
      :
      <input {...rest} className="w-full h-14 bg-main-100 rounded outline-1 outline-main-700 pl-4 mb-6 text-main-500" />
      
    }
    </>
  )
}