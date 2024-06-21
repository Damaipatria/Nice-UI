import React from "react"

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

  return (
    <>
      <div className={`flex flex-col relative ${width ? width : "w-80"} ${heigth ? heigth : "h-min-52"} border rounded-xl shadow-md`}>
        {children}
      </div>
    </>
  )
}

export default Card