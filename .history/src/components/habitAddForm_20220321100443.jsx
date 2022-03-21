import React, { memo } from 'react';

const HabitAddForm = memo(props => {
    props => {
        const formRef = React.createRef();  
        const inputRef = React.createRef();
      
        const onSubmit = event => {
          event.preventDefault();
          const name = inputRef.current.value;
          name && props.onAdd(name);
          formRef.current.reset();
        };
      
        return (
          <form ref={formRef} className="add-form" onSubmit={onSubmit}>
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
}
    
);

export default HabitAddForm;