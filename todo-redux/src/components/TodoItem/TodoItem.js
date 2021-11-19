import React, {Component} from 'react';
import './Todo.scss';

class TodoItem extends Component {
  render() {
    const { label } = this.props;
    return (
        <div className="todo-box">
          {label}
        </div>
    );
  }
}

export default TodoItem;
