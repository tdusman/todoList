import React from "react";
import TodoListItem from "./TodoListItem";

const TodoList = ({ todos, delTodo, editTodo }) => {
  return (
    <>
      {todos &&
        todos.map((todo) => (
          <TodoListItem
            key={todo.id}
            todo={todo}
            delTodo={delTodo}
            editTodo={editTodo}
          />
        ))}
    </>
  );
};

export default TodoList;
