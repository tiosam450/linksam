import React, { HtmlHTMLAttributes, InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{}

const input = (props: InputProps) => {
  return (
    <input {...props} className=''/>
  )
}

export default input
