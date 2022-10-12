import React, { useState, useEffect, useReducer } from 'react';
import TodoList from './TodoList';
import { Context } from './context';
import reducer from './reducer';

export default function App() {
  const [state, dispatch] = useReducer(reducer, JSON.parse(localStorage.getItem('todos')));
  const [todoTitle, setTodoTitle] = useState('');



  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(state))
  }, [state]);

  const addTodo = (evt) => {
    if (evt.key === 'Enter') {
      dispatch({
        type: 'add',
        payload: todoTitle
      })

      setTodoTitle('')
    }
  };

  

  const focusOnInput = () => {
    console.log('focus changed');
    document.getElementById('todoInput').focus();
  }

  return (
    <Context.Provider value={{
      dispatch
    }}>
      <div className="container">
        <h1 onClick={() => focusOnInput()}>Список задач</h1>

        <div className="input-field">
          <input
            id='todoInput'
            type="text"
            value={todoTitle}
            onChange={(evt) => setTodoTitle(evt.target.value)}
            onKeyPress={addTodo}
          />
          <label onClick={() => focusOnInput()}>Введите задачу нажмите Enter</label>
        </div>

        <TodoList todos={state} />
      </div>
    </Context.Provider>

  );
}
