import React, { RefObject } from "react"

interface PageContainerProps{
  id: string,
  children: React.ReactNode,
  pageContainerRef?: RefObject<HTMLDivElement>
}

export function PageContainer({ children, id, pageContainerRef }: PageContainerProps){
  return (
    <div id={id} className="flex flex-col sm:pt-[22px] sm:min-h-[calc(100vh-88px)] sm:mx-8 md:pt-0 md:h-[calc(100vh-92px)] md:mx-12 lg:mx-14 xl:mx-auto xl:max-w-[1148px]" ref={pageContainerRef}>
      {children}
    </div>
  )
}