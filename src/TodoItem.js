import React, { useState, useContext } from 'react';
import { Context } from './context';

export default function TodoItem({ title, id, completed }) {

  const { dispatch } = useContext(Context);

  return (
    <li className={`todo`} >
      <label>
        <input
          type="checkbox"
          checked={completed}
          onChange={() => dispatch({
            type: 'toggle',
            payload: id
          })}
        />
        <span style={completed ? { textDecoration: 'line-through' } : {}}>{title}</span>

        <i onClick={() => dispatch({
          type: 'remove',
          payload: id
        })}
          className="material-icons red-text"
        >
          delete
        </i>
      </label>
    </li>
  )
}