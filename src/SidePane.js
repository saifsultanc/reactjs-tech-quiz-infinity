import React, { Component } from "react";

class SidePane extends Component {
  state = {};
  render() {
    return (
      <div className="score-modal">
        <ul>
          <li>Score: {this.props.points}</li>
          <li>Total: {this.props.totalCount}</li>
        </ul>
      </div>
    );
  }
}

export default SidePane;
