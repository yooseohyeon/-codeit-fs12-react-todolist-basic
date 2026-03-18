import React from "react";

export const TodoItem = ({ todo }) => {
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
        <button type="button">{todo.completed ? "취소" : "완료"}</button>
        <button type="button">삭제</button>
      </div>
    </div>
  );
};
