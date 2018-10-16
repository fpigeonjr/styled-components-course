import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Button from "./components/common/Button";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Button>My Button</Button>
      </div>
    );
  }
}

export default App;
