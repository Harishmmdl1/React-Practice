import React from "react";
import Home from "./Home";

class App extends React.Component {
  constructor() {
    super();
    console.log("Hello Boys...");
  }

  render() {
    return (
      <div>
        <h1
          style={{
            color: "brown",
            backgroundColor: "wheat",
            border: "2px solid",
          }}
        >
        Hello {this.props.name} Api'ssss, your age is {this.props.age}
        </h1>
        <Home name="Harish" />
        
      </div>
    );
  }
}

export default App;
