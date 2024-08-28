import React, { useState } from "react";
import "../App.css";

function ToDo() {
  const [input, setInput] = useState("");
  const [todos, setTodo] = useState([]);

  const handleInput = (event) => {
    setInput(event.target.value);
  };

  const handleTodo = () => {
    if (input !== "") {
      setTodo([...todos, input]);
      setInput("");
    }
  };

  function deleteTodo(index) {
    const updateTodo = todos.filter((todo, i) => i !== index);
    setTodo([...updateTodo]);
  }

  return (
    <div className="todo-container">
      <h1 className="todo-heading">ToDo App</h1>
      <input
        className="todo-input"
        type="text"
        value={input}
        placeholder="Enter the task"
        onChange={handleInput}
      />
      <br />
      <button className="todo-button" onClick={handleTodo}>
        Add Todo
      </button>
      <ul className="todo-ul">
        {todos.map((todo, index) => (
          <li className="todo-li" key={index}>
            {todo}
            <span className="todo-delete" onClick={() => deleteTodo(index)}>
              X
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDo;
