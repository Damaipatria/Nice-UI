import React from "react"

type ButtonProps = {
  children: React.ReactNode
  className?: string,
  size?: 'sm' | 'md' | 'lg',
  color: 'primary' | 'secondary' | 'outline-primary' | 'outline-secondary'
}

const sizes = {
  "sm": 'py-2 px-7 text-sm',
  "md": 'py-2.5 px-9 text-base',
  "lg": 'py-3 px-11 text-lg',
}

const colors = {
  "primary": 'text-white bg-blue-500 hover:bg-blue-600 active:bg-blue-700',
  "secondary": 'text-white bg-gray-500 hover:bg-gray-600 active:bg-gray-700',
  "outline-primary": 'text-blue-500 border border-blue-500 hover:text-white hover:bg-blue-600 active:bg-blue-700',
  "outline-secondary": 'text-gray-500 border border-gray-500 hover:text-white hover:bg-gray-600 active:bg-gray-700',
}

const Button = ({ children, className, size = 'sm', color = 'primary' }: ButtonProps) => {

  const sizeClass = sizes[size]
  const colorClass = colors[color]

  return (
    <>
      <button className={`${sizeClass} font-semibold ${colorClass} rounded-md ${className}`}>
        {children}
      </button>
    </>
  )
}

export default Button