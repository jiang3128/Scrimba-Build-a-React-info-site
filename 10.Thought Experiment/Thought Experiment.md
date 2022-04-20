# Thought Experiment use append instead of reactdomrender
## document.getElementById("root").append(page)
will return [object Object] - a string representation of regular javascript object
Use stringify, document.getElementById("root").append(JSON.stringify(page)) to return it as JSON file
JSX returns plain Javascript objects, it will not recognize by the browser, its only when we try to render it using reactdom to renter, then react will turn them into dom elements that the browser can render such as h1, h3....