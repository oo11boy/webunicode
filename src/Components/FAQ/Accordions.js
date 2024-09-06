
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
export default function Accordions({summery, detail, icon, index, isExpand, setIsExpand}) {
  return (
    <>
      <Accordion
        key={index}
        onChange={() => setIsExpand(isExpand === index ? null : index)}
        expanded={isExpand === index}
        className="accordion-container"
      >
        <AccordionSummary
          className={
            isExpand === index
              ? "accordion-summery expanded"
              : "accordion-summery"
          }
          expandIcon={icon}
          aria-controls={`panel${index}-content`}
          id={`panel${index}-header`}
        >
          {summery}
        </AccordionSummary>
        <AccordionDetails className="accordion-details">
          {detail}
        </AccordionDetails>
      </Accordion>
    </>
  );
}
