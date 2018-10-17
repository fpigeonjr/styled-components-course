import React, { Component } from "react";
import { Button } from "reactstrap";
import PrimaryButton from "./components/common/PrimaryButton";
import { ThemeProvider } from "styled-components";
import LightTheme from "./themes/Light";
import DarkTheme from "./themes/Dark";
import PasswordInput from "./components/common/PasswordInput";

class App extends Component {
  state = {
    theme: LightTheme,
    showPassword: false
  };

  changeTheme = () => {
    this.setState({
      theme: this.state.theme.id === "light" ? DarkTheme : LightTheme
    });
  };

  togglePassword = () => {
    this.setState({
      showPassword: !this.state.showPassword
    });
  };

  render() {
    return (
      <ThemeProvider theme={this.state.theme}>
        <section>
          <Button color="primary">Bootstrap Button</Button>
          <PrimaryButton>Primary Button</PrimaryButton>
        </section>
      </ThemeProvider>
    );
  }
}

export default App;
