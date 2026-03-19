import React from "react";
import { TodoItem } from "./TodoItem.jsx";
import styles from "./TodoSection.module.css";

export const TodoSection = ({ title, todos, onToggle, onDelete }) => {
  if (todos.length === 0) return null;

  return (
    <div className={styles.section}>
      <h2 className={styles.sectionTitle}>{title}</h2>
      <ul className={styles.list}>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={onToggle}
            onDelete={onDelete}
          />
        ))}
      </ul>
    </div>
  );
};
