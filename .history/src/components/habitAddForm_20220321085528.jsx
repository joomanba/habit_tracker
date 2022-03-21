import React from 'react';

const HabitAddForm = (props) => {
  inputRef = React.createRef();

  onSubmit = (event) => {
    event.preventDefault();
    const name = this.inputRef.current.value;
    name && this.props.onAdd(name);
    this.inputRef.current.value = '';
  };

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
