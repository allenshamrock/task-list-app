/* eslint-disable react/prop-types */
import { useState } from "react";
import Button from "./Button";
function Header({ todos, setTodos }) {
  //console.log(todos);
  const [newTask, setNewTask] = useState("");
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTask.trim() !== "") {
      const newTodo = {
        id: crypto.randomUUID(),
        title: newTask,
        completed: false,
      };

      //updated the todos array with the newTask
      setTodos([newTodo, ...todos]);
    }

    setNewTask(" ");
  };

  return (
    <header>
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add a new task"
          className="form-control"
          onChange={(e) => setNewTask(e.target.value)}
          value={newTask}
        />
        <Button classname="btn-submit">Add Tasks</Button>
      </form>
    </header>
  );
}

export default Header;
