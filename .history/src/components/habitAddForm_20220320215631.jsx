import React, { Component } from 'react';

class HabitAddForm extends Component {
  render() {
    return (
      <form className="add-form">
        <input
          type="text"
          className="add-input"
          placeholder="Pleae enter your habbit"
        />
        <button className="add-button"></button>
      </form>
    );
  }
}

export default HabitAddForm;
