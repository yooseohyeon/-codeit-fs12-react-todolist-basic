import "./App.css";
import { useState } from "react";
import { TodoForm } from "./components/TodoForm";
import { TodoList } from "./components/TodoList";

function App() {
  const [title, setTitle] = useState("");
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "할일",
      completed: false,
      createdAt: "2026-03-18T12:00:00.000Z",
    },
    {
      id: 2,
      title: "할일",
      completed: true,
      createdAt: "2026-03-18T12:00:00.000Z",
    },
  ]);

  const completedCount = todos.filter((todo) => !todo.completed).length;

  return (
    <div className="app">
      <div className="app-header">
        <h1 className="app-title">TO-DO LIST</h1>
        {completedCount > 0 && (
          <span className="app-title-count">{completedCount}</span>
        )}
      </div>
      <TodoForm
        todos={todos}
        setTodos={setTodos}
        title={title}
        setTitle={setTitle}
      />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
