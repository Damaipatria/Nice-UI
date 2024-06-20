import React, { createContext, useContext, useState } from "react"
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

interface CardContextType {
  imgOverlays: any
  updateImgOverlays: (imgOverlays: any) => void
}

export const CardContext = createContext<CardContextType | null>(null)

export const CardProvider = ({ children }: { children: React.ReactNode }) => {
  const [imgOverlays, setImgOverlays] = useState<CardContextType>({
    imgOverlays: false,
    updateImgOverlays: (imgOverlays: any) => setImgOverlays(imgOverlays)
  })

  return (
    <CardContext.Provider value={imgOverlays}>
      {children}
    </CardContext.Provider>
  )
}

const Card = ({ children, width, heigth }: CardProps) => {

  // const sizeClass = sizes[size]
  // const widthString: string = `w-[${width}]`
  const cardContext = useContext(CardContext)

  return (
    <>
      <CardProvider>
        <div className={`flex flex-col ${width ? width : "w-80"} ${heigth ? heigth : "h-min-52"} border rounded-xl shadow-md`}>
          {children}
          <p>{cardContext ? 'true' : 'false'}</p>
        </div>
      </CardProvider>
    </>
  )
}

export default Card