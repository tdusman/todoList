import { useState } from "react";
import {
  Button,
  Checkbox,
  Container,
  List,
  ListItem,
  TextField,
  Typography,
} from "@mui/material";
import "./App.css";
import { v4 as uuidv4 } from "uuid";
import Header from "./components/Header";
// import InputTodo from "./components/InputTodo";
// import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodo] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const newTodoValue = (e) => {
    setInputValue(e.target.value);
  };

  const addTodo = () => {
    setTodo([
      ...todos,
      {
        id: uuidv4(),
        title: inputValue,
      },
    ]);
  };

  return (
    <>
      <Header />
      <Container>
        <TextField
          id=""
          label="Add Todo"
          variant="outlined"
          value={inputValue}
          onChange={newTodoValue}
        ></TextField>
        <Button variant="contained" onClick={addTodo}>
          Add Task
        </Button>

        {todos.map((todo) => (
          <List>
            <ListItem>
              <Checkbox></Checkbox>
              <Typography>{todo.title}</Typography>
              <Button>Edit</Button>
              <Button>Delete</Button>
            </ListItem>
          </List>
        ))}
      </Container>
    </>
  );
}

export default App;
