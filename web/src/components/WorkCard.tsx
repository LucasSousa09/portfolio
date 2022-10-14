interface WorkCard{
  imgSrc: string,
  altAttribute: string,
  workDescription: string,
  workLink: string,
}

export function WorkCard({ imgSrc, altAttribute , workDescription, workLink }: WorkCard){
  return (
    <div className="min-w-[224px] md:w-64 w lg:w-72 text-gray-700">
      <img src={imgSrc} alt={altAttribute + " Application Ilustration"} className="mb-4 rounded-lg border-[1px] border-zinc-400" />
      <div className="flex flex-col items-start justify-center bg-gray-100 rounded-lg sm:p-4 lg:text-lg md:h-52">
        <p className="mb-2 lg:leading-8">{ workDescription }</p>
        <a className="w-full break-words font-bold lg:leading-8 hover:underline" href={workLink}>{workLink}</a>
      </div>
    </div>
  )
}