import React, { useState } from "react";
import { Accordion, AccordionHeader, AccordionBody } from "@material-tailwind/react";

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
  );
}

const FilterAccordion = (props) => {
  const [openState, setOpenState] = useState({
    1: false,
    2: false,
    3: false,
    4: false,
  });

  const handleOpen = (id) => {
    const newOpenState = { ...openState };
    newOpenState[id] = !openState[id];
    setOpenState(newOpenState);
  };

  return (
    <>
      <Accordion className=" text-[#807D7E]"  open={openState[1]} icon={<Icon id={1} open={openState[1]} />}>
        <AccordionHeader  className=" gap-[20px] py-4 px-5" onClick={() => handleOpen(1)}> Price </AccordionHeader>
        <AccordionBody className="p-[20px]"> First </AccordionBody>
      </Accordion>

      <Accordion className="text-[20px] text-[#807D7E]" open={openState[2]} icon={<Icon id={2} open={openState[2]} />}>
        <AccordionHeader className="gap-[20px] py-4 px-5" onClick={() => handleOpen(2)}> Colors </AccordionHeader>
        <AccordionBody className="p-[20px]"> Second</AccordionBody>
      </Accordion>

      <Accordion className="text-[20px] text-[#807D7E]" open={openState[3]} icon={<Icon id={3} open={openState[3]} />}>
        <AccordionHeader className=" gap-[20px] py-4 px-5" onClick={() => handleOpen(3)}> Size </AccordionHeader>
        <AccordionBody className="p-[20px]"> Third </AccordionBody>
      </Accordion>

      <Accordion className="text-[20px] text-[#807D7E]" open={openState[4]} icon={<Icon id={4} open={openState[4]} />}>
        <AccordionHeader className="gap-[20px] py-4 px-5" onClick={() => handleOpen(4)}> Dress Style </AccordionHeader>
        <AccordionBody className="p-[20px]"> Fourth </AccordionBody>
      </Accordion>
    </>
  );
};

export default FilterAccordion;
