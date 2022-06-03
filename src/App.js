import { useState } from "react";
import { Container } from "@mui/material";
import "./App.css";
import Header from "./components/Header";
import InputTodo from "./components/InputTodo";
import TodoList from "./components/TodoList";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [todos, setTodos] = useState([]);
  const [editTitle, setEditTitle] = useState("");

  const inputTodo = (todoValue) => {
    setTodos([
      ...todos,
      {
        id: uuidv4(),
        title: todoValue,
      },
    ]);
  };

  const delTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTodo = (id) => {
    setEditTitle(todos.find((todo) => todo.id === id).title);
  };

  return (
    <>
      <Header />
      <Container>
        <InputTodo inputTodo={inputTodo} editTitle={editTitle} />
        <TodoList todos={todos} delTodo={delTodo} editTodo={editTodo} />
      </Container>
    </>
  );
}

export default App;
