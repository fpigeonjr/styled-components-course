import React, { Component } from "react";
import Button from "./components/common/Button";
import { ThemeProvider } from "styled-components";
import LightTheme from "./themes/Light";
import DarkTheme from "./themes/Dark";
import PasswordInput from "./components/common/PasswordInput";

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
        <>
          <PasswordInput />
          <br />
          <Button onClick={() => this.changeTheme()}>My Button</Button>
        </>
      </ThemeProvider>
    );
  }
}

export default App;
