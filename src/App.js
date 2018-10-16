import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Button from "./components/common/Button";
import { ThemeProvider } from "styled-components";
import LightTheme from "./themes/Light";
import DarkTheme from "./themes/Dark";

class App extends Component {
  state = {
    theme: LightTheme
  };

  changeTheme = () => {
    this.setState({
      theme: this.state.theme.id === "light" ? DarkTheme : LightTheme
    });
  };

  render() {
    return (
      <ThemeProvider theme={this.state.theme}>
        <Button onClick={() => this.changeTheme()}>My Button</Button>
      </ThemeProvider>
    );
  }
}

export default App;
