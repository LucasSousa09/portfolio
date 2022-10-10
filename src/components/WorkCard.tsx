import todoImg from '../assets/workimgs/todo.png'

interface WorkCard{
  imgSrc?: string,
  altAttribute?: string,
  workDescription?: string,
  workLink?: string,
}

export function WorkCard({ imgSrc, altAttribute , workDescription, workLink }: WorkCard){
  return (
    <div className="min-w-[224px] md:w-64 w lg:w-72 text-gray-700">
      <img src={todoImg} alt="Todo Application Example" className="mb-4 rounded-lg border-[1px] border-zinc-400" />
      <div className="bg-gray-100 rounded-lg sm:p-4 lg:text-lg">
        <p className="mb-2 lg:leading-8">A simple to-do application. Build with React and stylized with css modules.</p>
        <a className="font-bold lg:leading-8 hover:underline" href="https://portifolio-todo-app.netlify.app/">https://portifolio-todo-app.netlify.app/</a>
      </div>
    </div>
  )
}