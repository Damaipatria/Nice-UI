import React from "react"
import CardHeader from "../CardHeader"

type CardProps = {
  // style?: React.CSSProperties,
  children: React.ReactNode,
  heigth?: string,
  width?: string,
  // size?: 'sm' | 'md' | 'lg',
}

// const sizes = {
//   'sm': "min-w-48 min-h-56",
//   'md': "min-w-60 min-h-80",
//   'lg': "",
// }
// size = 'md'

const Card = ({ children, width, heigth }: CardProps) => {

  // const sizeClass = sizes[size]

  return (
    <>
      <div className={`flex flex-col ${width ? width : "min-w-60"} ${heigth ? heigth : "min-h-72"} border rounded shadow-md`}>
        {/* {children} */}
        <CardHeader />
      </div>
    </>
  )
}

export default Card