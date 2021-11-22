import React from "react";
import { useState } from "react";


const Todo = (props) => {
  const [isEditing, setEditing] = useState(false);
  const [newName, setNewName] = useState('');

  function handleChange(event) {
    setNewName(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    props.editTask(props.id, newName);
    setNewName("");
    setEditing(false);
  }

  const editingTemplate = (
    <form onSubmit={handleSubmit}>
      <div>
          EDIT "{props.name}" :
          <input
            id={props.id}
            className="todotext"
            type="text"
            value={newName}
            onChange={handleChange}
          />
      </div>
      
      <div>
          <button type="button" onClick={() => setEditing(false)}>
          CANCEL
          </button>
          <button type="submit">
          SAVE NEW NAME
          </button>
      </div>
    </form>
  );

  const viewTemplate = (
    <div>
      <div>
          <input
            id={props.id}
            type="checkbox"
            defaultChecked={props.completed}
            onChange={() => props.toggleTaskCompleted(props.id)}
          />{props.name}
      </div>
      <div>
            <button type="button" onClick={() => setEditing(true)}>
            EDIT {props.name}
            </button>
            <button type="button" onClick={() => props.deleteTask(props.id)}>
                DELETE {props.name}
            </button>
      </div>
    </div>
  );

  return (
          <li>{isEditing ? editingTemplate : viewTemplate}</li>
  );
  

}
  
export default Todo;