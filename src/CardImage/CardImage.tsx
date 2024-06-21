import React from "react"

export type CardProps = {
  src: string
  alt?: string
  overlays?: boolean
}

const CardImage = ({ src, alt, overlays }: CardProps) => {

  return (
    <>
      <img src={src} alt={alt} className={`w-full ${overlays ? 'absolute h-full rounded-xl -z-10' : 'rounded-t-xl'}`} />
    </>
  )
}

export default CardImage