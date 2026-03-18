import React from "react";

export const TodoForm = ({ todos, setTodos, title, setTitle }) => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();

        const newTodos = [
          ...todos,
          {
            id: Date.now(),
            title: title,
            completed: false,
            createdAt: new Date().toISOString(),
          },
        ];
        setTodos(newTodos);
        setTitle("");
      }}
    >
      <label htmlFor="todoTitle">할 일</label>
      <input
        type="text"
        id="todoTitle"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="할 일을 입력하세요"
        required
      />
      <button type="submit">추가</button>
    </form>
  );
};
