/* eslint-disable react/prop-types */
import { useState } from "react";

const Task = ({ todo, setTodos }) => {
  const { id } = todo;
  const [isFavorite, setIsFavorite] = useState(false);
  const handleDelete = () => {
    const filteredTodos = (prevTodos) =>
      prevTodos.filter((todo) => todo.id !== id);
    setTodos(filteredTodos);
  };

  const handleToggleFavorite = () => {
    // const filterdFavTasks = (prevTodos) =>
    //   prevTodos.filter((todo) => todo.id !== todo);
    // setTodos(filterdFavTasks);
    // console.log(handleFavTasks)
    setIsFavorite(!isFavorite);
  };
  return (
    <div className={`task${isFavorite ? ' favorite' : ''}`}>
      <p>{todo.title}</p>
      <div className="icons">
        <span
          className="material-symbols-outlined"
          onClick={() => handleDelete(id)}
        >
          delete
        </span>
        <span
          className={`material-symbols-outlined${isFavorite ? ' favorite-icon-red' : ''}`}
          onClick={handleToggleFavorite}
        >
          favorite
        </span>
      </div>
    </div>
  );
};

export default Task;
