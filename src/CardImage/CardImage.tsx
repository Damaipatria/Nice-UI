import React, { useContext } from "react"
import { CardContext } from "../Card/Card"

export type CardProps = {
  src: string
  alt?: string
}

const CardImage = ({ src, alt }: CardProps) => {

  const cardContext = useContext(CardContext)

  return (
    <>
      <img src={src} alt={alt} className="w-full rounded-t-xl" />
      <button className="text-white bg-blue-500 hover:bg-blue-600 active:bg-blue-700" onClick={() => { cardContext?.updateImgOverlays(true) }}>change imgOverlays value</button>
    </>
  )
}

export default CardImage