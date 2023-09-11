/* eslint-disable react/prop-types */
import { useState } from "react";
import Button from "./Button";
import Task from "./Task";
function Tasks({ todos, setTodos }) {
  const [showFavorites, setShowFavorites] = useState(false);

  const toggleShowFavorites = () => {
    setShowFavorites(!showFavorites);
  };

  const filteredTodos = showFavorites
    ? todos.filter((todo) => todo.favorite)
    : todos;

  const handleToggleFavorite = (id) => {
    // Toggle the favorite status of the task with the given id
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, favorite: !todo.favorite } : todo
    );

    setTodos(updatedTodos);
    //console.log(updatedTodos);
  };
  return (
    <section className="tasks-container">
      <div className="button-group">
        <Button classname="btn-all" onClick={() => setShowFavorites(false)}>
          All Tasks
        </Button>
        <Button classname="btn-fav" onClick={toggleShowFavorites}>
          Favorite Tasks
        </Button>
       
      </div>
      <article className="tasks">
       <h2>{showFavorites ? "Favourite Tasks": "All Tasks"} </h2>
        {filteredTodos?.map((todo) => (
          <Task
            key={todo.id}
            todo={todo}
            setTodos={setTodos}
            onToggleFavorite={handleToggleFavorite}
          />
        ))}
      </article>
    </section>
  );
}

export default Tasks;
