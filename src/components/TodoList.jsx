import React, { useState } from "react";
import { TodoItem } from "./TodoItem.jsx";
import styles from "./TodoList.module.css";

export const TodoList = ({ todos, setTodos }) => {
  const handleToggle = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        } else {
          return todo;
        }
      }),
    );
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      {todos.some((todo) => !todo.completed) && (
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>할 일 목록</h2>
          <ul className={styles.list}>
            {todos
              .filter((todo) => !todo.completed)
              .map((todo) => (
                <TodoItem
                  key={todo.id}
                  todo={todo}
                  onToggle={handleToggle}
                  onDelete={handleDelete}
                />
              ))}
          </ul>
        </div>
      )}

      {todos.some((todo) => todo.completed) && (
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>완료 목록</h2>
          <ul className={styles.list}>
            {todos
              .filter((todo) => todo.completed)
              .map((todo) => (
                <TodoItem
                  key={todo.id}
                  todo={todo}
                  onToggle={handleToggle}
                  onDelete={handleDelete}
                />
              ))}
          </ul>
        </div>
      )}
    </div>
  );
};
