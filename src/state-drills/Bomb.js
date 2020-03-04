import React from 'react'

class Bomb extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }

  render() {
    return (
      <div>
        <p>output</p>
      </div>
    )
  }
}

export default Bomb