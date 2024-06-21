import React, { useState } from "react"

const AccordionItem = ({index, set}: any) => {

  return (
    <>
      <div className="w-72 p-2 border rounded" style={{flex: '0 0 0%'}}>
        <button className="" onClick={() => set(!index)}>Title 1</button>
        <p className={`${ index ? 'h-min-20' : 'h-0'} overflow-hidden transition-all`}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa rem at quae dolor provident veniam, hic ea commodi ratione eius quisquam deleniti. Saepe minima illum delectus cumque rem alias quasi!
        </p>
      </div>
    </>
  )
}

const Accordion = () => {
  const [index, setIndex] = useState(true)

  return (
    <>
      <div className="flex flex-col">
        <AccordionItem index={index} set={setIndex}/>
      </div>
    </>
  )
}

export default Accordion