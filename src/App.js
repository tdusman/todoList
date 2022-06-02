import { useState } from "react";
import { Container } from "@mui/material";
import "./App.css";
import Header from "./components/Header";
import InputTodo from "./components/InputTodo";
import TodoList from "./components/TodoList";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [todos, setTodos] = useState([]);
  

  const inputTodo = (todoValue) => {
    setTodos([
      ...todos,
      {
        id: uuidv4(),
        title: todoValue,
      },
    ]);

  };

  return (
    <>
      <Header />
      <Container>
        <InputTodo inputTodo={inputTodo} />
        <TodoList todos={todos}/>
      </Container>
    </>
  );
}

export default App;
