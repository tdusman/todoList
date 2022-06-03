import React from "react";
import { Button, List, ListItem, Typography } from "@mui/material";

const TodoListItem = ({ todo, editTodo, delTodo }) => {
  return (
    <>
      <List>
        <ListItem>
          <Typography>{todo.title}</Typography>
          <Button variant="outlined" onClick={() => editTodo(todo.id)} >
            Edit
          </Button>
          <Button variant="outlined" onClick={() => delTodo(todo.id)}>
            Delete
          </Button>
        </ListItem>
      </List>
    </>
  );
};

export default TodoListItem;
