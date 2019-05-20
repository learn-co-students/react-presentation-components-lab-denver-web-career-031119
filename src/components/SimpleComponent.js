// Code SimpleComponent Here
import React from 'react'
import SimplerComponent from './SimplerComponent'

export default class SimpleComponent extends React.Component {
    state = {
        mood: 'happy'
    }

    changeMood = (e) => {
        let newMood;
        this.state.mood === 'happy' ? newMood = 'sad' : newMood = 'happy'
        this.setState({
            mood: newMood
        })
    }
    render() {
        return(
            <div onClick={this.changeMood}>
                {this.state.mood}
            </div>
        )
    }
}