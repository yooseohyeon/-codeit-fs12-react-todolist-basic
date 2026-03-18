import React from "react";

export const TodoForm = () => {
  return (
    <form>
      <input type="text" placeholder="할 일을 입력하세요"></input>
      <button type="submit">추가</button>
    </form>
  );
};
