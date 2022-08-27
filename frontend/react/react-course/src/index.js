import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

function Greeting() {
  const user = {
    fisrtName: "Du",
    lastName: "voy",
  };
  
  function add(a, b) {
    return a + b;
  }

  function subtract(a, b) {
    return a - b;
  }

  // return <h1>{JSON.stringify(user)}</h1>
  const response = (
    <div>
      <h1>{user.fisrtName} ++ {add(137, 4)}</h1>
      <h1>{user.lastName} -- {subtract(137, 4)}</h1>
    </div>
  );

  return response;
}

root.render(
  <>
    <Greeting />
  </>
);
