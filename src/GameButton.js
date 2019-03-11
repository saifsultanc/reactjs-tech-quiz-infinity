import React from "react";

const GameButton = ({ classList, handleClick, message }) => {
  return (
    <button type="button" className={classList} onClick={handleClick}>
      {message}
    </button>
  );
};

export default GameButton;
