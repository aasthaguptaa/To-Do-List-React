import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const data = [
  { id: "todo-0", name: "Eat", completed: true },
  { id: "todo-1", name: "Sleep", completed: false },
  { id: "todo-2", name: "Repeat", completed: false }
];


ReactDOM.render(<App tasks={data} />, document.getElementById("root"));



