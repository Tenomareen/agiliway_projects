import React from "react";

export class FirstComponent extends React.Component {
    state = {
        todoList: [],
        fields: {
            todoText: {
                name: "todoText",
                label: "Todo text",
                value: "",
                error: null,
                validator: (value = "") => {
                    return value ? false : "Required";
                },
            },
        },
    };

    handleSubmit = (event) => { 
        event.preventDefault();
    };

    handleChange = (event) => {
        const { value, name } = event.target;
        const currentField = this.state.fields[name];
        this.setState({
            fields: {
                ...this.state.fields,
                [name]: { ...currentField, value },
            },
        });
      //  console.log(this.state.fields.todoText.value);
    };

    handleAdding = (event) => {
        let todoItem = {
            value : ""
        }
        const { todoList, value } = this.state;
        todoItem.value = this.state.fields.todoText.value;
        event.preventDefault();
        this.setState({
            todoList : [...todoList,todoItem],
            fields: {
                todoText: {
                    name: "todoText",
                    label: "Todo text",
                    value: "",
        }}});
        console.log(value);
       // this.state.fields.todoText.value = "";
    }

    handleRemove = (event) => {
        event.preventDefault();
        const { todoList } = this.state;
        this.setState({todoList: [...todoList.splice(1, todoList.length)]})
        
    }

    render() {
        console.log(this.props)
        const {
            todoList,
            fields: { todoText },
        } = this.state;

        return (
            <>
                <div>
                    <div>Todo List</div>
                    {todoList.map((todo) => (
                        <div>{todo.value}</div>
                    ))}
                </div>
                <hr style={{ width: "100%" }} />
                <div>
                    <div>Todo Add Form</div>
                    <form onSubmit={this.handleSubmit}>
                        <label style={{ paddingRight: "20px" }} htmlFor={todoText.name}>
                            {todoText.label}
                        </label>
                        <input
                            type="text"
                            onChange={this.handleChange}
                            value={todoText.value}
                            name={todoText.name}
                            id={todoText.name}
                        />
                        {todoText.value.length === 0 && <span>Field can't be empty</span>}
                        {todoText.value.length > 15 && <span>Field contains too much symbols</span>}
                        <button
                            disabled={todoText.value.length === 0 || todoText.value.length > 15 || todoList.length === 9 }
                            style={{ marginLeft: "20px" }} onClick={this.handleAdding}
                        >
                            Add todo
                        </button>
                        <button disabled={this.state.todoList.length === 0} onClick={this.handleRemove}>Remove</button>
                    </form>
                </div>
            </>
        );
    }
}

export default FirstComponent;