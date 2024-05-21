import React from "react";
import Styles from "./App.module.css";
const h1Style = {
  color: "grey",
  background: "yellow",
  border: "2px solid red",
};

// const App1 = ({name, re, ...props}) => {
const App1 = (props) => {
    const {name, re, ...rest} = props;
  return (
    <div className="d-flex">
      
      <h1 style={h1Style}> Appu {name} but why {re} ok and the number is {rest.no} </h1>
      <h1 className={Styles.Elt}> Tappu </h1>
    </div>
  );
};

export default App1;
