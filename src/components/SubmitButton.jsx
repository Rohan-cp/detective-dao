import React, { useState } from "react";

const SubmitButton = (props) => {
  const [bgColor, setBgColour] = useState("white");
  const [textColor, setTextColor] = useState("black");
  return (
    <button
      style={{
        backgroundColor: bgColor,
        color: textColor,
        borderRadius: "25px",
        border: 0,
        width: 208,
        height: 40,
        cursor: "pointer",
        textAlign: "center",
        ...props.style
      }}
      onMouseEnter={() => {
        setBgColour("#6E44FF");
        setTextColor("white");
      }}
      onMouseLeave={() => {
        setBgColour("white");
        setTextColor("black");
      }}
    >
      {props.children}
    </button>
  );
};

export default SubmitButton;
