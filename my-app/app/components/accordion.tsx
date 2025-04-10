"use client";

import { Accordion, AccordionItem } from "@heroui/react";

export type AccordianItem = { title: string; body: string }[];
type MyProps = { data: AccordianItem };

export default function AccordionBox({ data }: MyProps) {
  return (
    <Accordion className="accordion-wrapper p-0" variant="splitted">
      {data.map((item, index) => (
        <AccordionItem
          key={index}
          aria-label={`accordion ${index}`}
          title={item.title}
        >
          {item.body}
        </AccordionItem>
      ))}
    </Accordion>
  );
}
