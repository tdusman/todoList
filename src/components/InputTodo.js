import { Button, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";

const InputTodo = ({ inputTodo, editTitle }) => {
  const [inputValue, setInputValue] = useState("");
  //const [track, setTrack] = useState(false);

  useEffect(() => {
    editTitle ? setInputValue(editTitle) : setInputValue("");
  }, [editTitle]);

  // setInputValue(inputValue);

  const getTodoValue = (e) => {
    // setEditTitle && setTrack(true);
    setInputValue(e.target.value);
  };

  // const editTodo=()=>{
  //   editTitle && setTrack(true);
  // }

  //console.log(editTitle, "=====", inputValue);

  const addTodo = () => {
    inputTodo(inputValue);
    setInputValue("");
    // setTrack(false);
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
