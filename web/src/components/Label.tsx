interface LabelProps{
  labelFor: string,
  labelName: string
}

export function Label({ labelFor, labelName }: LabelProps){
  return (
    <label className="font-bold pb-3" htmlFor={labelFor}>{labelName}</label>
  )
}