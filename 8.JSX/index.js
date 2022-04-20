// const h1 = document.createElement("h1")
// h1.textContent = "Hello world"
// h1.className = "header"
// console.log(h1)

// const element = <h1 className="header">This is JSX</h1>
// console.log(element)

/*
{
    type: "h1", 
    key: null, 
    ref: null, 
    props: {
        className: "header", 
        children: "This is JSX"
    }, 
    _owner: null, 
    _store: {}
}
 */

/*{type: "div", key: null, ref: null, props: {children: [{type: "h1", key: null, ref: null, props: {className: "header", children: "This is JSX"}, _owner: null, _store: {}}, {type: "p", key: null, ref: null, props: {children: "This is a paragraph"}, _owner: null, _store: {}}]}, _owner: null, _store: {}}*/
/*const page = (
    <div>
        <h1 className="header">This is JSX</h1>
        <p>This is a paragraph</p>
    </div>
)

console.log(page)

ReactDOM.render(
    page,
    document.getElementById("root")
)*/
const navbar = (
    <nav>
        <h1>My Favorite Coofee</h1>
        <ul>
            <li>
                Pricing
            </li>
            <li>
                About
            </li>
            <li>
                Contact
            </li>
        </ul>
    </nav>
)
ReactDOM.render(navbar, document.getElementById("root"))