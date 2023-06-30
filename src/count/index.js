import React from 'react'

class counter extends React.Component {
  constructor() {
    super()
    this.state = JSON.parse(window.localStorage.getItem('state')) || {
      count: 0,
    }
  }

  setState(state) {
    window.localStorage.setItem('state', JSON.stringify(state))
    super.setState(state)
  }

  increaseCount = () => {
    this.setState(prevState => ({count: prevState + 1}))
  }

  decreaseCount = () => {
    this.setState(prevState => ({count: prevState - 1}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="App">
        <h1> Count {count} </h1>
        <button onClick={this.increaseCount}>+</button>
        <button onClick={this.decreaseCount}>-</button>
      </div>
    )
  }
}

export default counter
