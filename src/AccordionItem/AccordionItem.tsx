import React, { useContext } from "react"
import { AccordionContext } from "../Context"

type AccordionItemProps = {
  title: string,
  children: React.ReactNode
}


const AccordionItem = ({ title, children }: AccordionItemProps) => {

  const accordionContext = useContext(AccordionContext)
  const open: string = 'max-h-80 transition-all duration-500 delay-150'
  const close: string = 'max-h-0 transition-all duration-300'
  // console.log(accordionContext?.isActive)
  // const onHandle

  return (
    <>
      <div className="accordion-item w-72 p-2" style={{ flex: '0 0 0%' }}>
        <button className="mb-1 font-medium" onClick={() => accordionContext?.updateIsActive(title)}>{title}</button>
        <p className={`${title === accordionContext?.isActive?.active ? open : close} overflow-hidden`}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa rem at quae dolor provident veniam, hic ea commodi ratione eius quisquam deleniti. Saepe minima illum delectus cumque rem alias quasi!
        </p>
      </div>
    </>
  )
}

export default AccordionItem