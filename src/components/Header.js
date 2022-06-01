import React from "react";
import { AppBar, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  appBar: {
    textAlign: "center",
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <div>
      <AppBar position="relative">
        <Typography className={classes.appBar} variant="h4">
          Todo List
        </Typography>
      </AppBar>
    </div>
  );
};

export default Header;
