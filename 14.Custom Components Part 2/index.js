/**
Challenge: 

Part 2: 
- Add a `header` element with a nested `nav` element. Inside the `nav`,
  include a `img` element with the image of the React logo inside
  (src="./react-logo.png") and make sure to set the width to something
  more manageable so it doesn't take up the whole screen
- Add an `h1` with some text describing the page. (E.g. "Reasons
  I'm excited to learn React"). Place it above the ordered list.
- Add a `footer` after the list that says: 
    "© 20xx <last name here> development. All rights reserved."

 */

function ReasonToLearnReact(){
    return (
        <div>
            <header>
                <nav>
                    <img src = "./react-logo.png" width = '40px'/>
                </nav>
            </header>
            <h1>Reasons of Learning React</h1>
            <ul>
                <li>Company take in React as a required skills</li>
                <li>Get more pay on having extra knowledge on React</li>
            </ul>
            <footer><p>© 2022 Zhu development. All rights reserved.</p></footer>
        </div>
    )
}

ReactDOM.render(< ReasonToLearnReact />, document.getElementById("root"));