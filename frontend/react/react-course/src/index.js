import React from "react"
import ReactDOM from "react-dom/client"

const root = ReactDOM.createRoot(document.getElementById("root"))


function Greeting() {
    const isMarried = false;

    // if (isMarried) {
    //     return <h1>It is married!!</h1>
    // } else {
    //     return <h1>It is not married!!</h1>
    // }

    // return isMarried ? <h1>It is married!!</h1> : <h1>It is not married!!</h1>
    return <h1>{isMarried ? "It is married!! 🤢" : "It is not married 😀"}</h1>

}


root.render(<div>
    <Greeting />
</div>)

