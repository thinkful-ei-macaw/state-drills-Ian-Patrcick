import React from 'react'

class HelloWorld extends React.Component {

  handleWorld = () => {
    this.setState({ who: 'world' })
  }
  handleFriend = () => {
    this.setState({ who: 'friend' })
  }
  handleReact = () => {
    this.setState({ who: 'react' })
  }

  constructor(props) {
    super(props)
    this.state = {
      who: 'something'
    }
  }

  render() {
    return (
      <div>
        <p>Hello, {this.state.who}</p>
        <button onClick={this.handleWorld}>
          world
      </button >
        <button onClick={this.handleFriend}>
          friend
      </button>
        <button onClick={this.handleReact}>
          react
      </button>
      </div>
    )
  }
}
export default HelloWorld