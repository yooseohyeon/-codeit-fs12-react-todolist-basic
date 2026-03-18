import React from "react";
import { TodoItem } from "./TodoItem.jsx";

export const TodoList = ({ todos, setTodos }) => {
  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      {todos.some((todo) => !todo.completed) && (
        <div>
          <h2>할 일 목록</h2>
          <ul>
            {todos
              .filter((todo) => !todo.completed)
              .map((todo) => (
                <TodoItem
                  key={todo.id}
                  todo={todo}
                  handleDelete={handleDelete}
                />
              ))}
          </ul>
        </div>
      )}

      {todos.some((todo) => todo.completed) && (
        <div>
          <h2>완료 목록</h2>
          <ul>
            {todos
              .filter((todo) => todo.completed)
              .map((todo) => (
                <TodoItem
                  key={todo.id}
                  todo={todo}
                  handleDelete={handleDelete}
                />
              ))}
          </ul>
        </div>
      )}
    </div>
  );
};
