import React from "react"

export type CardBodyProps = {
  children: React.ReactNode

}

const CardBody = ({ children }: CardBodyProps) => {
  return (
    <>
      <div className="grow p-3">
        {children}
      </div>
    </>
  )
}

export default CardBody