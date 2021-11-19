import React, {Component} from 'react';
import './Todo.css';

class Todo extends Component {
  render() {
    const { label } = this.props;
    return (
        <div className="todo-box">
          {label}
        </div>
    );
  }
}

export default Todo;
