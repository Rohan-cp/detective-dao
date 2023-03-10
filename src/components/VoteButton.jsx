import React, { useState, useEffect } from "react";

const VoteButton = (props) => {
  const [isSelected, setIsSelected] = useState(props.isSelected);

  useEffect(() => {
    setIsSelected(props.isSelected)
  }, [props.isSelected])
  
  const onClickHandler = () => {
    setIsSelected(currIsSelected => !currIsSelected)
    props.onClick()
  }
  
  return (
    <button
      onClick={onClickHandler}
      style={{
        backgroundColor: isSelected ? "black" : "white",
        color: isSelected ? "white" : "black",
        borderRadius: "25px",
        border: 0,
        width: 100,
        height: 35, 
        marginRight: "48px",
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
