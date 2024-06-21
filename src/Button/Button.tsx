import React, { ButtonHTMLAttributes } from "react"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  className?: string,
  size?: 'sm' | 'md' | 'lg',
  color?: 'primary' | 'secondary' | 'succes' | 'danger' | 'warning' | 'outline-primary' | 'outline-secondary' | 'outline-succes' | 'outline-danger' | 'outline-warning',
}

const sizes = {
  "sm": 'py-2 px-7 text-sm',
  "md": 'py-2.5 px-9 text-base',
  "lg": 'py-3 px-11 text-lg',
}

const colors = {
  "primary": 'text-white bg-blue-500 hover:bg-blue-600 active:bg-blue-700',
  "secondary": 'text-white bg-gray-500 hover:bg-gray-600 active:bg-gray-700',
  "succes": 'text-white bg-green-500 hover:bg-green-600 active:bg-green-700',
  "danger": 'text-white bg-red-500 hover:bg-red-600 active:bg-red-700',
  "warning": 'text-white bg-yellow-500 hover:bg-yellow-600 active:bg-yellow-700',
  "outline-primary": 'text-blue-500 border border-blue-500 hover:text-white hover:bg-blue-600 active:bg-blue-700',
  "outline-secondary": 'text-gray-500 border border-gray-500 hover:text-white hover:bg-gray-600 active:bg-gray-700',
  "outline-succes": 'text-green-500 border border-green-500 hover:text-white hover:bg-green-600 active:bg-green-700',
  "outline-danger": 'text-red-500 border border-red-500 hover:text-white hover:bg-red-600 active:bg-red-700',
  "outline-warning": 'text-yellow-500 border border-yellow-500 hover:text-white hover:bg-yellow-600 active:bg-yellow-700',
}

const Button = ({ children, className, size = 'sm', color = 'primary' }: ButtonProps) => {

  const sizeClass = sizes[size]
  const colorClass = colors[color]

  return (
    <>
      <button className={`${sizeClass} ${colorClass} font-semibold rounded-md ${className}`}>
        {children}
      </button>
    </>
  )
}

export default Button