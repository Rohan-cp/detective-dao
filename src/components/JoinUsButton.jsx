import React, { useState } from "react";

const JoinUsButton = (props) => {
  const [bgColor, setBgColour] = useState("white");
  const [textColor, setTextColor] = useState("black");
  return (
    <button
      onClick={props.onClick}
      style={{
        backgroundColor: bgColor,
        color: textColor,
        borderRadius: "25px",
        border: 0,
        width: 150,
        height: 40,
        cursor: "pointer",
        textAlign: "center",
        fontSize: 15,
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

export default JoinUsButton;
