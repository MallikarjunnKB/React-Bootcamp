import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css'

// const heading = React.createElement("h1", { id: 'title' }, "Hello World"); //basic react element
//Element -> Object -> HTML (h1)
// console.log(heading);

//Functional Component - Composition of React Elements
//Component - returns some react element
// const HeadComponent = () =>{
//     return React.createElement("h1", { id: 'title' }, "Hello World Component");
// }

// const heading = React.createElement("div",{id: "title"}, [
//     React.createElement("h1", {id: "heading"}, "Namaste React Bootcamp"),
//     React.createElement("h2", {}, "from zero to hero"),
//     React.createElement("h3", {}, "in 3 months")
// ])

const noOfMonths = 3;

//JSX - Javascript XML
const heading = (<div id="title" className='title-class' tabIndex={1}>
    <h1>Namaste React Bootcamp</h1>
    <h2>from zero to hero</h2>
    <h3>in {noOfMonths} months</h3>
</div>)
//JSX -> React.createElement -> Object -> DOM (h1)

const TitleComponent = () => <h1>Namaste React Bootcamp</h1>


const HeadingComponent = () => {
    return (
        <div id="title" className='title-class' tabIndex={1}>
           <TitleComponent/>
            <h2>from zero to hero</h2>
            <h3>in {noOfMonths} months</h3>
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent/>);