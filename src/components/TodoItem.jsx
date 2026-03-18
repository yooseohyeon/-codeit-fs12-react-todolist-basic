import React from "react";

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
    <div>
      <h3>{todo.title}</h3>
      <span>{formattedDate}</span>
      <div>
        <button type="button" onClick={() => onToggle(todo.id)}>
          {todo.completed ? "취소" : "완료"}
        </button>
        <button type="button" onClick={() => onDelete(todo.id)}>
          삭제
        </button>
      </div>
    </div>
  );
};
