import React from 'react';

const HabitAddForm = (props) => {
    return (
        <form className="add-form" onSubmit={this.onSubmit}>
        <input
          ref={this.inputRef}
          type="text"
          className="add-input"
          placeholder="Pleae enter your habbit"
        />
        <button className="add-button">Add</button>
      </form>
    );
};

export default HabitAddForm;
