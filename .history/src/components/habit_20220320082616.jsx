import React, { Component } from 'react';

class Habit extends Component {
    render() {
        return (
            <>
                <span className="habit-name">Reading</span>
                <span className="habit-count">8</span>
                <button className="habbit-button habit-increase">
                    <i className="fa-solid fa-square-plus"></i>
                </button>
                <button className="habbit-button habit-decrease">
                    <i className="fa-solid fa-square-minus"></i>
                </button>
                <button className="habbit-button habi-delete">
                    <i clasName="fa-solid fa-trash"></i>
                </button>   
            </>
        );
    }
}

export default Habit;