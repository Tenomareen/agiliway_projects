import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

export const TODO_INPUT = "TODO_INPUT";
export const TODO_REMOVE = "TODO_REMOVE";

export const addTodoAction = (todo) => ({
  type: TODO_INPUT,
  payload: todo,
});
export const removeTodoAction = (todoId) => ({
  type: TODO_REMOVE,
  payload: todoId
});

const initialState = {
  todoList: [],
};

/*
  type: ""
  payload: {} 
  error: {}
*/

function todoReducer(state = initialState, action) {
  switch (action.type) {
    case TODO_INPUT: {
      return { ...state, todoList: [...state.todoList, action.payload] };
    }
    case TODO_REMOVE: {
      const todoIndex = action.payload;
      const updatedTodos = state.todoList.filter(
        (todo, index) => index !== todoIndex
      );
      return { ...state, todoList: updatedTodos };
    }
    default:
      return state;
  }
}

export const store = createStore(
  todoReducer,
  composeWithDevTools()
  // other store enhancers if any
);
