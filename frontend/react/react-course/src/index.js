import React from "react"
import ReactDOM from "react-dom/client"

const root = ReactDOM.createRoot(document.getElementById("root"))


function Greeting() {
    return <div>
        <h1>Hello World</h1>
        <p>This is a paragraph</p>
    </div>
}


root.render(<div>
    <Greeting />
    <Greeting />
    <Greeting />
</div>)

