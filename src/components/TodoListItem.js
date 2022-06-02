import React from "react";
import { Button, List, ListItem, Typography } from "@mui/material";

const TodoListItem = (props) => {
  return (
    <>
      <List>
        <ListItem>
          <Typography>{props.todo.title}</Typography>
          <Button variant="outlined">Edit</Button>
          <Button variant="outlined">Delete</Button>
        </ListItem>
      </List>
    </>
  );
};

export default TodoListItem;
