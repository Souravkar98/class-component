import "./styles.css";
import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "sourav"
    };
  }
  handleChange = () => {
    this.setState({ name: "ram" });
  };
  render() {
    return (
      <div className="App">
        <h1>Hello CodeSandbox...{this.state.name}</h1>
        <h2>Start editing to see some magic happen!</h2>
        <button onClick={this.handleChange}>Change</button>
      </div>
    );
  }
}

export default App;
