import React from 'react';

const exports = {};

// Player views must be extended.
// It does not have its own Wrapper view.
exports.GetGuess = class extends React.Component {
  state={guess:0}
  render() {
    const {parent, playable, guess} = this.props;
    return (
      <div>
        {guess ? 'It was a draw! Pick again.' : ''}
        <br />
        {!playable ? 'Please wait...' : ''}
        <br /> Guess a number between 0 and 10
        <input type='number' min={0} max={10} value ={guess} onChange={(e)=>{this.setState({guess:e.target.value})}}/>
          <button onClick={()=>parent.playGuess(this.state.guess)}>Submit Guess</button>
      </div>
    );
  }
}

exports.WaitingForResults = class extends React.Component {
  render() {
    return (
      <div>
        Waiting for results...
      </div>
    );
  }
}

exports.Done = class extends React.Component {
  render() {
    const {outcome} = this.props;
    return (
      <div>
        Thank you for playing. The outcome of this game was:
        <br />{outcome || 'Unknown'}
      </div>
    );
  }
}

exports.Timeout = class extends React.Component {
  render() {
    return (
      <div>
        There's been a timeout. (Someone took too long.)
      </div>
    );
  }
}

export default exports;