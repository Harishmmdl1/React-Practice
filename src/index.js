import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Api from "./App";
import Appu from "./App2";
import "bootstrap/dist/css/bootstrap.min.css";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div >
    <Api name={"Bachi"} age="23"/>
    <Api name={"Bacha"} age="24"/>
    <Appu name={"disconnecting"} re={"reconnecting"} no="24"/>
    <Appu name={"calling"} re={"reconnecting"} no="26"/>
  </div>
);
