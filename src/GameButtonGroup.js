import React from "react";
import GameButton from "./GameButton";

const GameButtonGroup = ({ show, handleClose, handleOpen }) => {
  const playBtn = show ? "btn btn-secondary disabled" : "btn btn-success";
  const closeBtn = show ? "btn btn-danger" : "btn btn-secondary disabled";

  return (
    <div className="btn-group">
      <GameButton
        classList={playBtn}
        handleClick={handleOpen}
        message="Let's play"
      />

      <GameButton
        classList={closeBtn}
        handleClick={handleClose}
        message="Close"
      />
    </div>
  );
};

export default GameButtonGroup;
