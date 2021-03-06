import React, { Component } from 'react';
import './Die.css';

class Die extends Component {
    render() {
        return (
            <div>
                <i className={`die ${this.props.num} ${this.props.roll}`}></i>
            </div>
        );
    };
};

export default Die;