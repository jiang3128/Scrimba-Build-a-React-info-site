// import React from "react"
// import ReactDOM from "react-dom"

/**
Challenge: fix our code!

Don't forget, you're not using CDNs anymore, so there's no
global "ReactDOM" variable to use anymore.
 */

const page = (
    <div>
        <img src = "./react-logo.png" width = '40px'/>
        <h1>Fun facts about React</h1>
        <ul>
            <li>Was first established in 2013</li>
            <li>Was originally created by Jordan Walke</li>
            <li>Has well over 100stars on GitHub</li>
            <li>Is maintained by Facebook</li>
            <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
    </div>
)

ReactDOM.render(page, document.getElementById("root"));
// document.getElementById("root").append(JSON.stringify(page))