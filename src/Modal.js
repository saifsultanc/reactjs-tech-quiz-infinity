import React, { Component } from "react";
import CheckAnswer from "./CheckAnswer";

class Modal extends Component {
  answerClick = event => {
    const choice = this.props.question["answers"].indexOf(event.target.value);
    this.props.setChoice(choice);
  };

  handleClick = () => {
    const { question, choice } = this.props;

    if (question["answers"][choice] === question["correct_answer"]) {
      this.props.updateScore();
      this.props.correctChoice();
    } else this.props.incorrectChoice();
  };

  render() {
    const { show, question, isLoaded, error } = this.props;
    let showHideClassName = show
      ? "modal modal-animated display-block"
      : "modal modal-animated display-none";
    let check1 = false,
      check2 = false;
    return (
      <React.Fragment>
        {
          (check1 = show && this.props.correct && (
            <CheckAnswer result="correct" next={this.props.next} />
          ))
        }
        {
          (check2 = show &&
            this.props.choice !== -1 &&
            this.props.correct === false && (
              <CheckAnswer result="incorrect" next={this.props.next} />
            ))
        }
        {!check1 && !check2 && (
          <div className={showHideClassName}>
            {isLoaded ? question["question"] : ""}
            <section className="modal-main">
              {error ? error.message : ""}
              {isLoaded
                ? question["answers"].map(answerOption => {
                    return (
                      <div
                        className="form-check form-check-inline"
                        key={answerOption}
                      >
                        <input
                          className="form-check-input"
                          type="radio"
                          name="inlineRadioOptions"
                          id="inlineRadio1"
                          value={answerOption}
                          onClick={this.answerClick}
                        />
                        <label
                          className="form-check-label"
                          htmlFor="inlineRadio1"
                        >
                          {answerOption}
                        </label>
                      </div>
                    );
                  })
                : "Loading..."}
            </section>
            <button
              type="button"
              className="btn btn-info btn-block btn-modal"
              onClick={this.handleClick}
            >
              Submit Answer
            </button>
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default Modal;
