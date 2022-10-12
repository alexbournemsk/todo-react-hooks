import React, {useState, useContext} from 'react';
import {Context} from './context';

export default function TodoItem({title, id, completed}) {

 const [checked, setChecked] = useState(false);
 const {toggleTodo, removeTodo} = useContext(Context);

  return (
    <li className={`todo`} >
      <label>
        <input
          type="checkbox"
          checked={completed}
          onChange={()=>toggleTodo(id)}
        />
        <span style={completed ? {textDecoration:'line-through'} : {}}>{title}</span>

        <i onClick={()=>removeTodo(id)}
          className="material-icons red-text"
        >
          delete
        </i>
      </label>
    </li>
  )
}