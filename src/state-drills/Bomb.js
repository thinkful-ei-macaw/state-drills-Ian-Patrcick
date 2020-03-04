import React from "react";

class Bomb extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1
    };
  }
  componentDidMount() {
    this.interval = setInterval(() => {
      console.log(this.state.count);
      this.setState({
        count: this.state.count + 1
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }
  render() {
    if (this.state.count >= 8) {
      clearInterval(this.interval);
      return (
        <div>
          <p>BOOM!</p>
        </div>
      );
    } else if (this.state.count % 2 === 0) {
      return (
        <div>
          <p>Tock</p>
        </div>
      );
    } else {
      return (
        <div>
          <p>Tick</p>
        </div>
      );
    }
  }
}

export default Bomb;
