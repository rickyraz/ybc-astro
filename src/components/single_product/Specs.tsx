// @ts-nocheck

import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

function parseSpesifikasi(data) {
  const rows = data.split("\n");
  const specifications = [];
  for (let row of rows) {
    const [title, description] = row.split(";");
    specifications.push({
      title: title.trim(),
      description: description.replace(/\\n/g, "\n").trim(), // Replacing \n with actual line breaks
    });
  }
  return specifications;
}

function Specs({ specifications }) {
  const [open, setOpen] = React.useState(1);

  if (specifications === null || specifications === undefined) {
    return <p>there's no Spesification</p>;
  }

  const handleOpen = (value) => setOpen(open === value ? 0 : value);
  return (
    <section className="bg-[#08154B] px-8 pb-16">
      <h3 className=" text-2xl font-bold text-center pt-12 pb-8 text-white">
        Spesifikasi
      </h3>
      <div className="max-w-4xl mx-auto space-y-4 ">
        {specifications.map((spec, index) => (
          <Accordion
            key={spec.id}
            open={open === spec.id}
            className="text-white"
          >
            <AccordionHeader
              onClick={() => handleOpen(spec.id)}
              className="text-white font-semibold text-lg pb-2"
            >
              {spec.section}
            </AccordionHeader>
            {/* <AccordionBody>
              {parseSpesifikasi(spec.details).map((detail, idx) => (
                <p key={idx} className="text-white/70">
                  <strong>{detail.title}:</strong> {detail.description}
                </p>
              ))}
            </AccordionBody> */}
            <AccordionBody>
              <table className="w-full text-sm text-left text-white">
                <thead>
                  <tr>
                    <th className="pb-2 font-semibold">Specification</th>
                    <th className="pb-2 font-semibold">Details</th>
                  </tr>
                </thead>
                <tbody>
                  {parseSpesifikasi(spec.details).map((detail, idx) => (
                    <tr key={idx}>
                      <td className="py-1">{detail.title}</td>
                      <td className="py-1">{detail.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </AccordionBody>
          </Accordion>
        ))}
      </div>
    </section>
  );
}

export default Specs;
