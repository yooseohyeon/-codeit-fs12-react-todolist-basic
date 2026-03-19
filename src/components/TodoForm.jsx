import React from "react";
import { useState } from "react";
import styles from "./TodoForm.module.css";

export const TodoForm = ({ setTodos }) => {
  const [title, setTitle] = useState("");

  return (
    <form
      className={styles.form}
      onSubmit={(e) => {
        e.preventDefault();
        setTodos((prev) => [
          ...prev,
          {
            id: Date.now(),
            title: title,
            completed: false,
            createdAt: new Date().toISOString(),
          },
        ]);
        setTitle("");
      }}
    >
      <label className={styles.label} htmlFor="todoTitle">
        할 일
      </label>
      <div className={styles.inputGroup}>
        <input
          type="text"
          id="todoTitle"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="할 일을 입력하세요"
          required
          className={styles.input}
        />
        <button type="submit" className={styles.submitBtn}>
          추가
        </button>
      </div>
    </form>
  );
};
