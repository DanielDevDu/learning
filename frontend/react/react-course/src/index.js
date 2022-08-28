import React from "react";
import ReactDOM from "react-dom/client";
import { Greeting, OtherGreeting } from "./Greeting";
// import UserProfile, { UserCard } from "./Users";
import data from "./data";
import { Button } from "./Button";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <Button text="Login"/>
    <Button text="Sing In"/>
    <Button text="Sing Up"/>
    <Button/>


    <Greeting data={data[0]} />
    <Greeting data={data[1]} />
  </>
);
