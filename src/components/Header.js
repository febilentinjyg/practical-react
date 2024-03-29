import React from 'react';
import logo from '../logo.svg';

export default class Header extends React.Component {
    render() {
        return (
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <div>{this.props.title}</div>
                <div>{this.props.num}</div>
            </header>
        )
    }
}