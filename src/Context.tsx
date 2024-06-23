import React, { createContext, useState } from "react"

interface IAccordionContext {
  active: string
}

type AccordionContextType = {
  isActive: IAccordionContext,
  updateIsActive: (key: string) => void,
}

export const AccordionContext = createContext<AccordionContextType | null>(null)

export const AccordionProvider = ({ children }: { children: React.ReactNode }) => {

  const [isActive, setIsActive] = useState<IAccordionContext>({ active: 'Accordion#1' })

  const updateIsActive = (key: string) => {
    setIsActive({ active: key })
  }

  return (
    <AccordionContext.Provider value={{ isActive, updateIsActive }}>
      {children}
    </AccordionContext.Provider>
  )
}