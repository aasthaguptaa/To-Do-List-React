import React, { useState } from "react";
import Form from "./components/form";
import FilterButton from "./components/filterbutton";
import Todo from "./components/todo";


const FILTERING = {
  All: () => true,
  Active: task => !task.completed,
  Completed: task => task.completed
};

const FILTER_NAMES = Object.keys(FILTERING);

function App(props) {
  const [tasks, setTasks] = useState(props.tasks);
  const [filter, setFilter] = useState('All');

  function toggleTaskCompleted(id) {
    const updatedTasks = tasks.map(task => {
      if (id === task.id) {
        return {...task, completed: !task.completed}
      }
      return task;
    });
    setTasks(updatedTasks);
  }

  
function addTask(name) {
  const newTask = { id: "id", name: name, completed: false };
  setTasks([...tasks, newTask]);
}

function deleteTask(id) {
  const remainingTasks = tasks.filter(task => id !== task.id);
  setTasks(remainingTasks);
}

function editTask(id, newName) {
  const editedTaskList = tasks.map(task => {
    if (id === task.id) {
      return {...task, name: newName}
    }
    return task;
  });
  setTasks(editedTaskList);
}

const taskList = tasks
.filter(FILTERING[filter])
.map(task => (
  <Todo
    id={task.id}
    name={task.name}
    completed={task.completed}
    key={task.id}
    toggleTaskCompleted={toggleTaskCompleted}
    deleteTask={deleteTask}
    editTask={editTask}
  />
));

const filterList = FILTER_NAMES.map(name => (
  <FilterButton
    key={name}
    name={name}
    isPressed={name === filter}
    setFilter={setFilter}
  />
));

const headingText = `${taskList.length} tasks are remaining!`;
return (
  <div className="todoapp">
    <Form addTask={addTask} />
    <div className="filters">
    {filterList}
    </div>
    <h2 id="list-heading">{headingText}</h2>
    <ul>
      {taskList}
    </ul>
  </div>
);
}

export default App;