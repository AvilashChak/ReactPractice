import React, { useState } from "react";
import AccordionItem from "./AccordionItem";

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(prev => (prev === index ? null : index));
  };

  return (
    <>
        <div style={{ maxWidth: '600px', margin: '2rem auto' }}>
            {items.map((item, index) => (
                <AccordionItem 
                    key={index}
                    isOpen={activeIndex === index}
                    onToggle={() => handleToggle(index)}
                    title={item.title}
                    content={item.content}
                />
            ))}
        </div>
    </>
  );
};

export default Accordion;
