import React, { Component } from "react";
import styled, { ThemeProvider, extend } from "styled-components";
import LightTheme from "./themes/Light";

import Button from "./components/common/Button";

const LoginWithFacebookButton = styled(Button)`
  background: blue;
  color: white;
`;

class App extends Component {
  state = {
    theme: LightTheme,
    showPassword: false
  };
  render() {
    return (
      <ThemeProvider theme={this.state.theme}>
        <section>
          <Button>My Button</Button>
          <LoginWithFacebookButton>Facebook Button</LoginWithFacebookButton>
        </section>
      </ThemeProvider>
    );
  }
}

export default App;
