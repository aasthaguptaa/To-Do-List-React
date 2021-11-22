import React, { useState } from "react";

function Form(props) {
  
  const [name, setName] = useState("");

  function handleChange(event) {
    setName(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    props.addTask(name);
    setName("");
  }
  return (
    <form onSubmit={handleSubmit}>
      <h1> To Do List</h1>
      <h2>What needs to be done? </h2>
      <input
        type="text"
        id="input"
        name="text"
        value={name}
        onChange={handleChange}
      />
      <button className="addbutton" type="submit">ADD</button>
    </form>
  );
}

export default Form;