import React, {Component} from 'react'
export default class SimpleComponent extends Component {
  // constructor() {
  //   super()
  state = {mood: 'happy'}
  // }
  changeMood = event => {
    this.setState({mood: this.state.mood === 'happy' ? 'sad' : 'happy'})
  }
  render() {
    return (
      <div onClick={this.changeMood}>{this.state.mood}</div>
    )
  }
}
