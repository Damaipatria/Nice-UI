import React, { useContext, useState } from "react"
import AccordionItem from "../AccordionItem"
import { AccordionContext, AccordionProvider } from "../Context"

type AccordionBodyProps = {
  children: React.ReactNode
  defaultKey: string
}

type AccordionProps = {
  defaultKey: string
}

const AccordionBody = ({ children, defaultKey }: AccordionBodyProps) => {

  const accordionContext = useContext(AccordionContext)
  // console.log(accordionContext)
  accordionContext?.updateIsActive

  return (
    <>
      <div className="accordion flex flex-col w-fit border border-b-0 rounded-md overflow-hidden">
        {children}
      </div>
    </>
  )
}


const Accordion = ({ defaultKey }: AccordionProps) => {
  const [index, setIndex] = useState(true)

  return (
    <>
      <AccordionProvider>
        <AccordionBody defaultKey={defaultKey}>
          <AccordionItem title="Accordion#1">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa rem at quae dolor provident veniam, hic ea commodi ratione eius quisquam deleniti. Saepe minima illum delectus cumque rem alias quasi!
          </AccordionItem>
          <AccordionItem title="Accordion#2">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa rem at quae dolor provident veniam, hic ea commodi ratione eius quisquam deleniti. Saepe minima illum delectus cumque rem alias quasi!
          </AccordionItem>
        </AccordionBody>
      </AccordionProvider>
    </>
  )
}

export default Accordion