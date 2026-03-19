import React from "react";
import { TodoSection } from "./TodoSection.jsx";

export const TodoList = ({ todos, setTodos }) => {
  const activeTodos = todos.filter((todo) => !todo.completed);
  const completedTodos = todos.filter((todo) => todo.completed);

  const handleToggle = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };

  const handleDelete = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <TodoSection
        title="할 일 목록"
        todos={activeTodos}
        onToggle={handleToggle}
        onDelete={handleDelete}
      />
      <TodoSection
        title="완료 목록"
        todos={completedTodos}
        onToggle={handleToggle}
        onDelete={handleDelete}
      />
    </div>
  );
};
