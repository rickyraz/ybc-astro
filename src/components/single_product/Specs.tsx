// @ts-nocheck

import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

function Specs() {
  const [open, setOpen] = React.useState(1);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);
  return (
    <section className="bg-[#08154B] px-8 pb-16">
      <h3 className=" text-2xl font-bold text-center pt-12 pb-8 text-white">
        Spesifikasi
      </h3>
      <div className="max-w-4xl mx-auto space-y-4">
        <Accordion open={open === 1}>
          <AccordionHeader
            onClick={() => handleOpen(1)}
            className="text-white font-semibold text-lg pb-2"
          >
            Mesin
          </AccordionHeader>
          <AccordionBody>
            <p className="text-white/70">
              We&apos;re not always in the position that we want to be at.
              We&apos;re constantly growing. We&apos;re constantly making
              mistakes. We&apos;re constantly trying to express ourselves and
              actualize our dreams.
            </p>
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 2}>
          <AccordionHeader
            onClick={() => handleOpen(2)}
            className="text-white font-semibold text-lg pb-2"
          >
            Rangka
          </AccordionHeader>
          <AccordionBody>
            <p className="text-white/70">
              We&apos;re not always in the position that we want to be at.
              We&apos;re constantly growing. We&apos;re constantly making
              mistakes. We&apos;re constantly trying to express ourselves and
              actualize our dreams.
            </p>
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 3}>
          <AccordionHeader
            onClick={() => handleOpen(3)}
            className="text-white font-semibold text-lg pb-2"
          >
            Dimensi
          </AccordionHeader>
          <AccordionBody>
            <p className="text-white/70">
              We&apos;re not always in the position that we want to be at.
              We&apos;re constantly growing. We&apos;re constantly making
              mistakes. We&apos;re constantly trying to express ourselves and
              actualize our dreams.
            </p>
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 4}>
          <AccordionHeader
            onClick={() => handleOpen(4)}
            className="text-white font-semibold text-lg pb-2"
          >
            Kelistrikan
          </AccordionHeader>
          <AccordionBody>
            <p className="text-white/70">
              We&apos;re not always in the position that we want to be at.
              We&apos;re constantly growing. We&apos;re constantly making
              mistakes. We&apos;re constantly trying to express ourselves and
              actualize our dreams.
            </p>
          </AccordionBody>
        </Accordion>
      </div>
    </section>
  );
}

export default Specs;
