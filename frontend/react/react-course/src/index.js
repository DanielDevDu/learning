import React from "react";
import ReactDOM from "react-dom/client";
import { Greeting, OtherGreeting } from "./Greeting";
// import UserProfile, { UserCard } from "./Users";
import data from "./data";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <Greeting data={data[0]} />
    <Greeting data={data[1]}/>
  </>
);
