import { InputHTMLAttributes } from "react";

export function Input({ ...rest }: InputHTMLAttributes<HTMLInputElement>){
  return (
      <input {...rest} className="rounded bg-main-100 outline-1 outline-main-500 text-main-500 w-full pl-4 mb-6 sm:h-10 sm:text-sm 2md:h-12 lg:h-14 " />
  )
}