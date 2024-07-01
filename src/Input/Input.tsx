import React from "react"

type InputProps = {
  label?: string
  icon?: React.ReactNode
  variant: 'floating' | 'underline'
  name?: string
  type?: string
  placeholder?: string
}

const labelFloating = "absolute bottom-1/2 translate-y-1/2 mx-3 px-1 text-gray-500 transition-all duration-150 peer-focus:-top-[10%] peer-focus:-translate-y-1/4 peer-focus:bg-white peer-focus:text-sm peer-focus:text-blue-500"
const underline = "pe-0 border-b rounded-0 outline-none focus:border-b-blue-500"

const Input = ({ label, icon, variant, name, type = 'text', placeholder, ...props }: InputProps) => {
  return (
    <>
      <div className="flex flex-col relative">
        <input className={`py-2 ${icon ? 'ps-9' : 'ps-3'} ${variant === 'underline' ? underline : 'pe-3 border rounded-lg focus:outline-blue-500'} peer`} name={name} type={type} placeholder={placeholder} {...props}/>
        {icon ? <i className="absolute bottom-1/2 translate-y-1/2 px-2">{icon}</i> : ''}
        {label ? <label className={`${variant === 'floating' ? labelFloating : 'order-first mb-1 px-1'} font-medium`}>{label}</label> : ('')}
      </div> 
    </>
  )
}

export default Input