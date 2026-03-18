import React from "react";
import styles from "./TodoItem.module.css";

export const TodoItem = ({ todo, onToggle, onDelete }) => {
  const formattedDate = new Intl.DateTimeFormat("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  }).format(new Date(todo.createdAt));

  return (
    <li className={styles.item}>
      <div className={styles.content}>
        <h3
          className={`${styles.title} ${todo.completed ? styles.titleDone : ""}`}
        >
          {todo.title}
        </h3>
        <div className={styles.date}>{formattedDate}</div>
      </div>

      <button
        type="button"
        className={`${styles.toggleBtn} ${todo.completed ? styles.toggleBtnDone : ""}`}
        onClick={() => onToggle(todo.id)}
      >
        {todo.completed ? "취소" : "완료"}
      </button>

      <button
        type="button"
        className={styles.deleteBtn}
        onClick={() => onDelete(todo.id)}
        title="삭제"
      >
        ×
      </button>
    </li>
  );
};
