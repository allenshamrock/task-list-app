/* eslint-disable react/prop-types */
import Button from "./Button";
import Task from "./Task";
function Tasks({ todos, setTodos }) {
  return (
    <section className="tasks-container">
      <div className="button-group">
        <Button classname="btn-all" >All Tasks</Button>
        <Button classname="btn-fav" >Favorite Tasks</Button>
      </div>
      <article className="tasks">
        <h2>All Tasks</h2>
        {todos?.map((todo) => (
          <Task key={todo.id} todo={todo} setTodos={setTodos} />
        ))}
      </article>
    </section>
  );
}

export default Tasks;
