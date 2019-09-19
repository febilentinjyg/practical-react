import React from 'react';

export default class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            initialCount: 0
        }
    }

    incrementCount = () => {
        this.setState({
            initialCount: this.state.initialCount + 1
        })
    }

    decrementCount = () => {
        this.setState({
            initialCount: this.state.initialCount - 1
        })
    }

    render() {
        return (
            <div>
                <p>count : {this.state.initialCount}</p>
                <button onClick={this.decrementCount}>Decrement</button>
                <button onClick={this.incrementCount}>Increment</button>
            </div>
        )
    }
}