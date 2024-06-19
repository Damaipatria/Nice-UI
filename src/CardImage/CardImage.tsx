import React from "react"

export type CardProps = {
  src: string
  alt?: string
}

const CardImage = ({ src, alt }: CardProps) => {

  return (
    <>
      <img src={src} alt={alt} className="w-full rounded-t-xl" />
    </>
  )
}

export default CardImage