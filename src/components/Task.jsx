/* eslint-disable react/prop-types */
const Task = ({ todo, setTodos, onToggleFavorite }) => {
  const { id, favorite } = todo;
 
  const handleDelete = () => {
    const filteredTodos = (prevTodos) =>
      prevTodos.filter((todo) => todo.id !== id);
    setTodos(filteredTodos);
  };

  const handleToggleFavoriteClick = () => {
    onToggleFavorite(id);
  };
  return (
    <div className={`task${favorite ? " favorite" : ""}`}>
      <p>{todo.title}</p>
      <div className="icons">
        <span
          className="material-symbols-outlined"
          onClick={() => handleDelete(id)}
        >
          delete
        </span>
        <span
          className={`material-symbols-outlined${
            favorite ? " favorite-icon-red" : ""
          }`}
          onClick={handleToggleFavoriteClick}
        >
          favorite
        </span>
      </div>
    </div>
  );
};

export default Task;
