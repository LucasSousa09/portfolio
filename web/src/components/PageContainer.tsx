import React from "react"

interface PageContainerProps{
  id: string,
  children: React.ReactNode
}

export function PageContainer({ children, id }: PageContainerProps){
  return (
    <div id={id} className="snap-start flex flex-col sm:pt-[22px] sm:min-h-[calc(100vh-88px)]  md:pt-0 md:h-[calc(100vh-92px)] sm:mx-8 md:mx-12 lg:mx-14 xl:mx-auto xl:max-w-[1148px]">
      {children}
    </div>
  )
}