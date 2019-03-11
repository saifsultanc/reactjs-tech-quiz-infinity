import React, { Component } from "react";
import QuizWindow from "./QuizWindow";
import GameButtonGroup from "./GameButtonGroup";
import API from "./API";
import { shuffle } from "lodash";

class Dashboard extends Component {
  state = {
    show: false,
    error: null,
    isLoaded: false,
    questions: [[]],
    score: 0
  };

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  updateScore = () => {
    const { score } = this.state;
    this.setState({ score: score + 1 });
  };

  componentDidMount() {
    this.getData();
  }

  adjustString(stringValue) {
    return stringValue
      .replace(/&quot;/g, '"')
      .replace(/&#039;/g, "'")
      .replace("&gt;", ">")
      .replace("&lt;", "<");
  }

  getData() {
    API.get().then(
      payload => {
        const questions = [...payload["results"]];
        questions.forEach(question => {
          question["question"] = this.adjustString(question["question"]);
          question["correct_answer"] = this.adjustString(
            question["correct_answer"]
          );
          question["answers"] = [];
          question["incorrect_answers"].forEach(incorrect => {
            incorrect = this.adjustString(incorrect);
            question["answers"].push(incorrect);
          });
          question["answers"].push(question["correct_answer"]);
          shuffle(question["answers"]);
        });
        shuffle(questions);
        this.setState({ isLoaded: true, questions });
      },
      error => {
        this.setState({ isLoaded: true, error });
      }
    );
  }

  render() {
    return (
      <div>
        <h1>Infinite Tech Quiz!</h1>
        <QuizWindow
          show={this.state.show}
          questions={this.state.questions}
          isLoaded={this.state.isLoaded}
          error={this.state.error}
          updateScore={this.updateScore}
        />
        <GameButtonGroup
          show={this.state.show}
          handleClose={this.hideModal}
          handleOpen={this.showModal}
        />
      </div>
    );
  }
}

export default Dashboard;
