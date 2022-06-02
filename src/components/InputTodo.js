import { Button, TextField } from "@mui/material";
import React, { useState } from "react";

const InputTodo = (props) => {
  const [inputValue, setInputValue] = useState("");

  const getTodoValue = (e) => {
    setInputValue(e.target.value);
  };

  const addTodo = () => {
    props.inputTodo(inputValue);
    setInputValue("");
  };

  return (
    <>
      <TextField
        // id=""
        label="Add Todo"
        variant="outlined"
        value={inputValue}
        onChange={getTodoValue}
      ></TextField>
      <Button variant="contained" onClick={addTodo}>
        {" "}
        Add Todo
      </Button>
    </>
  );
};

export default InputTodo;
