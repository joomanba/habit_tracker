import React from 'react';

const HabitAddForm = (props) => {
  const inputRef = React.createRef();

  const onSubmit = (event) => {
    event.preventDefault();
    const name = inputRef.current.value;
    name && props.onAdd(name);
    this.inputRef.current.value = '';
  };

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <input
        ref={inputRef}
        type="text"
        className="add-input"
        placeholder="Pleae enter your habbit"
      />
      <button className="add-button">Add</button>
    </form>
  );
};

export default HabitAddForm;
