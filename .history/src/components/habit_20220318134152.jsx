import React, { Component } from 'react';
import '@fortawesome/fontawesome-free/js/all.js';

class Habit extends Component {
    render() {
        return (
            <>
                <span className="habit-name">Reading</span>
                <span className="habit-count">8</span>
            </>
        );
    }
}

export default Habit;