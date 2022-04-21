/**
Mini Challenge:
Move the `header` element from Page into 
its own component called "Header"
*/

function Header(){
    return(
        <div>
            <header>
                <nav>
                    <img src = "./react-logo.png" width = '40px'/>
                </nav>
            </header>
        </div>
    )
}

function Content(){
    return(
        <div>
            <h1>Reasons of Learning React</h1>
            <ul>
                <li>Company take in React as a required skills</li>
                <li>Get more pay on having extra knowledge on React</li>
            </ul>
        </div>
    )
}

function Footer(){
    return(
        <div>
            <footer><p>© 2022 Zhu development. All rights reserved.</p></footer>
        </div>
    )
}

function ReasonToLearnReact(){
    return (
        <div>
            <Header />
            <Content />
            <Footer />
        </div>
    )
}

ReactDOM.render(< ReasonToLearnReact />, document.getElementById("root"));