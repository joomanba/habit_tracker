import React, { Component } from 'react';

class Habit extends Component {
    render() {
        return (
            <>
                <span className="habit-name">Reading</span>
                <span className="habit-count">8</span>
                <button>
                    <i class="fa-solid fa-square-plus"></i>
                </button>
                <button>
                    <i class="fa-solid fa-square-minus"></i>
                </button>
                <button>
                    <i class="fa-solid fa-trash"></i>
                </button>   
            </>
        );
    }
}

export default Habit;