import React, { useState, useEffect } from "react";

const VoteButton = (props) => {
  const [isSelected, setIsSelected] = useState(props.isSelected);
  const { inputId, proposalId, type, label } = props
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
        cursor: "pointer",
        marginRight: "48px",
        textAlign: "center",
        ...props.style
      }}
    >
      <input
        style={{
        borderRadius: "25px",
        border: 0,
        width: 100,
        height: 35, 
        marginRight: "48px",
        cursor: "pointer",
        textAlign: "center",
        ...props.style
      }}
                          type="hidden"
                          id={inputId}
                          name={proposalId}
                          value={type}
                          defaultChecked={type === 2}
                        />
                        <label style={{cursor: "pointer"}} htmlFor={inputId}>
                          {label}
                        </label>
    </button>
  );
};

export default VoteButton;
