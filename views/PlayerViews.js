import React from "react";

const exports = {};

exports.GetGuess = class extends React.Component {
  state = { guess: 0 };
  render() {
    const { parent, playable, guess } = this.props;
    return (
      <div>
        {guess ? "It was a tie, Pick again." : ""}
        <br />
        {!playable ? "Please wait..." : ""}
        <div className="players">
          <br /> Guess a number between 0 and 5
          <input
            className="input"
            type="number"
            min={0}
            max={5}
            value={this.state.guess}
            onChange={(e) => {
              this.setState({ guess: e.target.value });
            }}
          />
          <button
            className="submit-btn"
            onClick={() => parent.playGuess(this.state.guess)}
          >
            Submit Guess
          </button>
        </div>
      </div>
    );
  }
};

exports.WaitingForResults = class extends React.Component {
  render() {
    return <div>Waiting for results...</div>;
  }
};

exports.Done = class extends React.Component {
  render() {
    const { outcome, price } = this.props;
    return (
      <div>
        The number was : {price || "Unknown"}
        <br></br>
        Congratulations
        <br></br>
        The result of the game is:
        <br />
        {outcome || "Unknown"}
      </div>
    );
  }
};

exports.Timeout = class extends React.Component {
  render() {
    return <div>There's been a timeout. (Someone took too long.)</div>;
  }
};

export default exports;
