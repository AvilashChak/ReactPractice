import React, { useEffect, useRef, useState } from "react";

const AccordionItem = ({ isOpen, onToggle, title, content }) => {
  const contentRef = useRef();
  const [height, setHeight] = useState("0px");

  useEffect(() => {
    setHeight(isOpen ? `${contentRef.current.scrollHeight}px` : "0px");
  }, [isOpen]);

  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "8px",
        marginBottom: "1rem",
        overflow: "hidden",
      }}
    >
      <button
        onClick={onToggle}
        style={{
          width: "100%",
          background: "rgb(6 6 6)",
          padding: "1rem",
          textAlign: "left",
          border: "none",
          outline: "none",
          cursor: "pointer",
          fontSize: "1.1rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {title}
        <span style={{ fontSize: "1.5rem" }}>{isOpen ? "–" : "+"}</span>
      </button>
      <div
        ref={contentRef}
        style={{
          height: height,
          transition: "height 0.3s ease",
          overflow: "hidden",
          padding: isOpen ? "1rem" : "0 1rem",
          background: "rgb(18 17 17)",
        }}
      >
        <p style={{ margin: 0 }}>{content}</p>
      </div>
    </div>
  );
};

export default AccordionItem;
