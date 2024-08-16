import { InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{}

const Input = (props: InputProps) => {
  return (
    <input {...props} className='p-2 border-none rounded-md text-[1.1rem]'/>
  )
}

export default nput
