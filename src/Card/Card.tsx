import React from "react"
// component import
import CardHeader from "../CardHeader"
import CardFooter from "../CardFooter"
import CardBody from "../CardBody"
// import { CardContext, CardProvider } from "../Context/CardContext"

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
  // const widthString: string = `w-[${width}]`

  // console.log(imgOverlays?.value)

  return (
    <>
        <div className={`flex flex-col relative ${width ? width : "w-80"} ${heigth ? heigth : "h-min-52"} border rounded-xl shadow-md`}>
          {children}
        </div>
    </>
  )
}

export default Card