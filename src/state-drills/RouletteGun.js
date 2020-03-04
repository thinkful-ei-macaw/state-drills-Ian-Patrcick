import React from "react";

class RouletteGun extends React.Component {
  handleClick = () => {
    this.setState({ spinningTheChamber: true });
    this.timeout = setTimeout(callback => {
      const num = Math.ceil(Math.random() * 8);
      this.setState({ chamber: num, spinningTheChamber: false });
    }, 2000);
    clearTimeout(this.timeout);
  };
  constructor(props) {
    super(props);
    this.state = {
      chamber: null,
      spinningTheChamber: false
    };
  }
  generateMessage() {
    if (this.state.spinningTheChamber === true) {
      return "spinning the chamber and pulling the trigger! ...";
    } else if (this.state.chamber === this.props.bulletInChamber) {
      return "BANG!!!!";
    } else {
      return `you're safe!`;
    }
  }
  render() {
    return (
      <div>
        <p>Stuff</p>
        <button onClick={this.handleClick}>Pull the trigger!</button>
      </div>
    );
  }
}

export default RouletteGun;
