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

    };


    roll() {
        function throwDice() {
            const diceProps = ['one', 'two', 'three', 'four', 'five', 'six'];
            const index = Math.floor(Math.random() * 6);
            const fontClass = `fas fa-dice-${diceProps[index]} fa-10x`;
            return fontClass;
        };

        this.setState({ dice1: throwDice(), dice2: throwDice(), isRolling: true })

        setTimeout(() => {
            this.setState({ isRolling: false })
        }, 400)
    };

    animate(arg) {
        return arg === 'die' ? this.state.isRolling ? 'animate' : ''
            : this.state.isRolling ? 'Rolling...' : 'Roll Dice!'
    };

    render() {
        return (
            <div className='RollDice'>
                <div className='RollDiceContainer'>
                    <Die num={this.state.dice1} roll={this.animate('die')} />
                    <Die num={this.state.dice2} roll={this.animate('die')} />
                </div>
                <button className='button' onClick={this.roll} disabled={this.state.isRolling}>{this.animate('button')}</button>
            </div>
        );
    };
};

export default RollDice;