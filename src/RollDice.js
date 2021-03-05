import React, { Component } from 'react';
import Die from './Die';
import './RollDice.css';

class RollDice extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dice1: `fas fa-dice-one fa-10x`,
            dice2: `fas fa-dice-six fa-10x`,
            isRolling: false,
        };
        this.roll = this.roll.bind(this);
    }


    roll() {
        const button = document.querySelector('.button');

        function throwDice() {
            const diceProps = ['one', 'two', 'three', 'four', 'five', 'six'];
            const index = Math.floor(Math.random() * 6);
            const fontClass = `fas fa-dice-${diceProps[index]} fa-10x`;
            return fontClass;
        };

        this.setState({ dice1: throwDice(), dice2: throwDice(), isRolling: true })
        button.disabled = true;
        button.classList.add('rolling')

        setTimeout(() => {
            this.setState({ isRolling: false })
            button.disabled = false;
            button.classList.remove('rolling')
        }, 500)
    };


    render() {

        return (
            <div className='container'>
                <Die num={this.state.dice1} roll={this.state.isRolling ? 'animate' : ''} />
                <Die num={this.state.dice2} roll={this.state.isRolling ? 'animate' : ''}/>
                <button className='button' onClick={this.roll}>{this.state.isRolling ? 'Rolling...' : 'Roll Dice!'}</button>
            </div>
        );
    };
};

export default RollDice;