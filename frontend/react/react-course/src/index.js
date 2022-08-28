import React from "react";
import ReactDOM from "react-dom/client";
import { Greeting, OtherGreeting } from "./Greeting";
// import UserProfile, { UserCard } from "./Users";
import data from "./data";
import { Button } from "./Button";
import { TaskCard } from "./Task";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <TaskCard ready={false} />
    <br></br>
    <TaskCard ready={true} />
  </>
);
