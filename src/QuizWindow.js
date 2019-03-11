import React, { Component } from "react";
import Modal from "./Modal";
import SidePane from "./SidePane";

class QuizWindow extends Component {
  state = { current: 0, choice: -1, correct: null, points: 0, totalCount: 0 };

  correctChoice = () => {
    const { points, totalCount } = this.state;
    this.setState({ points: points + 1, totalCount: totalCount + 1 });
    this.setState({ correct: true });
  };

  incorrectChoice = () => {
    const { totalCount } = this.state;
    this.setState({ totalCount: totalCount + 1 });
    this.setState({ correct: false });
  };

  setChoice = choice => {
    this.setState({ choice });
  };

  nextQuestion = () => {
    this.setState({ choice: -1, correct: null });

    let { current } = this.state;
    const { questions } = this.props;

    current = (current + 1) % questions.length;
    this.setState({ current });
  };

  render() {
    const { current } = this.state;
    const { questions } = this.props;

    return (
      <div>
        <Modal
          question={questions[current]}
          next={this.nextQuestion}
          choice={this.state.choice}
          correct={this.state.correct}
          correctChoice={this.correctChoice}
          incorrectChoice={this.incorrectChoice}
          setChoice={this.setChoice}
          {...this.props}
        />
        <SidePane
          points={this.state.points}
          totalCount={this.state.totalCount}
        />
      </div>
    );
  }
}

export default QuizWindow;
