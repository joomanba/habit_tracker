import React, { Component } from 'react';

class HabitAddForm extends Component {
    onSubmit = (event) => {
        console.log(event);
    };

    render() {
        return (
            <form className="add-form" onSubmit={this.onSubmit}>
            <input
              type="text"
              className="add-input"
              placeholder="Pleae enter your habbit"
            />
            <button className="add-button">Add</button>
          </form>
        );
    }
}

export default HabitAddForm;
