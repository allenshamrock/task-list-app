import { useState, useEffect } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
function App() {
  const [todos, setTodos] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(null);

  useEffect(function () {
    setIsLoading(true);
    const fetchTodos = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/todos");
      const data = await res.json();

      if (!res.ok) {
        throw new Error("Something went wrong.Please try again");
      }

      return data;
    };
    fetchTodos()
      .then((response) => setTodos(response.slice(0, 6)))
      .catch((error) => setIsError(error))
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  if (isError) {
    return <h2>{isError.message}</h2>;
  }
  return (
    <main>
      <Header todos={todos} setTodos={setTodos} />
      <Tasks todos={todos} setTodos={setTodos} />
    </main>
  );
}

export default App;
