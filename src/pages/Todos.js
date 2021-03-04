// useReducer Demo

import React, {useReducer, useState} from "react";

//reducer: (state, action) => newState
//action ==> {type: '', payload: {}}
//dispatch

const initialState = {
  todos: ['Buy a new car', 'Complete the story']
};

const todoReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {...state, todos: [...state.todos, action.todo]};
    case 'REMOVE_TODO':
      return {...state, todos: state.todos.filter(todo => todo !== action.todo)};
    default:
      return state
  }
};

export default function ToDo() {
  const [todoText, setTodoText] = useState('');

  const [state, dispatch] = useReducer(todoReducer, initialState);

  return (<div>
    <form onSubmit={e => {
      dispatch({type: 'ADD_TODO', todo: todoText});
      setTodoText('');
      e.preventDefault()
    }}>

      <input value={todoText} onChange={event => {
        setTodoText(event.target.value)
      }}/>
      <button type='submit'> Add a Todo</button>
    </form>

    {state.todos.map(todo => (
      <div>
        {todo}
        &nbsp;
        <button onClick={() => {
          dispatch({type: 'REMOVE_TODO', todo: todo})
        }}>X
        </button>
      </div>
    ))}

  </div>);
}