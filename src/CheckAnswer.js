import React, { Component } from "react";
import logSymbols from "log-symbols";

class CheckAnswer extends Component {
  state = {};
  render() {
    let cName, symbol, message;
    if (this.props.result === "correct") {
      cName = "modal-green";
      symbol = logSymbols.success;
      message = "Good job!";
    } else {
      cName = "modal-red";
      symbol = logSymbols.error;
      message = "Wrong answer!";
    }
    return (
      <div className={`modal display-block ${cName}`}>
        <div className={"${cName"}>
          {symbol}
          <p>{message}</p>
          <button
            type="button"
            className="btn btn-info btn-modal"
            onClick={this.props.next}
          >
            Next Question
          </button>
        </div>
      </div>
    );
  }
}

export default CheckAnswer;
