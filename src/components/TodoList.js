import React from "react";
import TodoListItem from "./TodoListItem";

const TodoList = ({ todos }) => {
  return (
    <>
      {todos && todos.map((todo) => <TodoListItem key={todo.id} todo={todo} />)}
    </>
  );
};

export default TodoList;
