import React, { useState } from 'react';

const SimpleHabits = (props) => {
    const [count, setCount] = useState(0);
    return (
        <li className="habit">
          <span className="habit-name">Reading</span>
          <span className="habit-count">{this.state.count}</span>
          <button
            className="habit-button habit-increase"
            onClick={this.handleIncrement}
          >
            <i className="fas fa-plus-square"></i>
          </button>
        </li>
      );
};

export default SimpleHabits;

class SimpleHabit extends Component {
  state = {
    count: 0,
  };

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    
  }
}

export default SimpleHabit;