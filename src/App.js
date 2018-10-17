import React, { Component } from "react";
import styled, { ThemeProvider } from "styled-components";
import LightTheme from "./themes/Light";
import Button from "./components/common/Button";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body{
  font-family: 'Gaegu', cursive !important;
}
`;

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
        <>
          <GlobalStyle />
          <section>
            <Button>My Button</Button>
            <LoginWithFacebookButton>Facebook Button</LoginWithFacebookButton>
          </section>
        </>
      </ThemeProvider>
    );
  }
}

export default App;
