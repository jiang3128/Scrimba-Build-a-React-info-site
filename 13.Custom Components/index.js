/**
Challenge: 

Part 1: Create a page of your own using a custom Page component

It should return an ordered list with the reasons why you're
excited to be learning React :)

Render your list to the page

*/

function ReasonToLearnReact(){
    return (
        <div>
            <h1>Reasons of Learning React</h1>
            <ul>
                <li>Company take in React as a required skills</li>
                <li>Get more pay on having extra knowledge on React</li>
            </ul>
        </div>
    )
}

ReactDOM.render(< ReasonToLearnReact />, document.getElementById("root"));