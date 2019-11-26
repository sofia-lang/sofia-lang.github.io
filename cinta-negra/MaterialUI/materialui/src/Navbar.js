import React from "react";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/Toolbar";

const NavBar = () => {
  return (
    <div>
      <AppBar position="static">
        <ToolBar>React Material UI Example</ToolBar>
      </AppBar>
    </div>
  );
};

export default NavBar;
