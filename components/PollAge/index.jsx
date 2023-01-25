import React from 'react'
import { Accordion, AccordionBody, AccordionHeader, AccordionItem } from "react-headless-accordion"

const PollAge = ({children, title}) => {
  return (
    <>
      <div className='warpper-container'>
        <Accordion transition={{ duration: "300ms", timingFunction: "cubic-bezier(0, 0, 0.2, 1)" }}>
          <AccordionItem className="w-[90%]">
            {({ open }) => (
              <>
                <AccordionHeader className="w-full flex justify-between items-center border-b p-4 ">
                  <span className='text-[20px] text-[black] font-bold'>{title}</span>
                  <svg class={`w-6 h-6 ${!open ? '' : 'rotate-90'}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" /></svg>
                </AccordionHeader>
                <AccordionBody>
                  <div className="p-5 font-light flex flex-wrap justify-around items-center bg-[#EEEEEE]">
                    {
                      children
                    }
                  </div>
                </AccordionBody>
              </>
            )}
          </AccordionItem>
        </Accordion>
      </div>
      <style jsx="true">{`
        .warpper-container{
          margin: 30px 0;
        }
      `}</style>
    </>
  )
}

export default PollAge 