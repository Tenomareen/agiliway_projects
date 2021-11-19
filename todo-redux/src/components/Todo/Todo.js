import React from "react";
import { addTodoAction, removeTodoAction } from "../store/store";
import { connect } from "react-redux";

class TodoList extends React.Component {
  state = {
    todoText: "",
  };

  render() {
    console.log(this.state.todoText);
    const { todoText } = this.state;

    return (
      <div>
        <div>Todo Add Form</div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const { todoText } = this.state;
            const { addTodo } = this.props;
            addTodo({ text: todoText });
          }}
        >
          <input
            type="text"
            onChange={(event) =>
              this.setState({ todoText: event.target.value })
            }
            value={todoText}
          />
          {todoText.length === 0 && <span>Field can't be empty</span>}
          {todoText.length > 15 && <span>Field contains too much symbols</span>}
          <button
            disabled={todoText.length === 0 || todoText.length > 15}
            type="submit"
          >
            Add todo
          </button>
        </form>
        {/* <hr style={{ width: "100%" }} /> */}
        {this.props.todoList.map((todo, index) => (
          <div>
            <span>{todo.text}</span>
            <span
              onClick={() => {
                this.props.removeTodo(index);
              }}
            >
              ❌
            </span>
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  todoList: state.todoList,
});

const mapDispatchToProps = {
  addTodo: addTodoAction,
  removeTodo: removeTodoAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
