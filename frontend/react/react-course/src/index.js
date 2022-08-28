import React from "react";
import ReactDOM from "react-dom/client";
import { Greeting } from "./Greeting";
import UserProfile, { UserCard } from "./Users"

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <Greeting />
    <UserProfile />
    <UserCard />
  </>
);
