import React, { useState } from "react";

const VoteButton = (props) => {
  const [isSelected, setIsSelected] = useState(props.isSelected);
  return (
    <button
      onClick={props.onClick}
      style={{
        backgroundColor: isSelected ? "black" : "white",
        color: isSelected ? "white" : "black",
        borderRadius: "25px",
        border: 0,
        width: 208,
        height: 40,
        cursor: "pointer",
        textAlign: "center",
        ...props.style
      }}
    >
      {props.children}
    </button>
  );
};

export default VoteButton;
