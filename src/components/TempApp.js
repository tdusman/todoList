import { useState } from "react";
import { Container } from "@mui/material";
import "./App.css";
import Header from "./components/Header";
import InputTodo from "./components/InputTodo";
import TodoList from "./components/TodoList";

function App() {
  const [todo, setTodo] = useState([]);

  return (
    <>
      <Header />
      <Container>
        <InputTodo />
        <TodoList />
      </Container>
    </>
  );
}

export default App;
