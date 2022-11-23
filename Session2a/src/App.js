import React from 'react';
import ReactDOM from 'react-dom/client';

// const heading = React.createElement("h1", { id: 'title' }, "Hello World"); //basic react element
//Element -> Object -> HTML (h1)
// console.log(heading);

//Functional Component - Composition of React Elements
//Component - returns some react element
const HeadComponent = () =>{
    return React.createElement("h1", { id: 'title' }, "Hello World Component");
}

//JSX - Javascript XML
const heading = <h1>Hello World JSX</h1>
//JSX -> React.createElement -> Object -> DOM (h1)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadComponent/>);