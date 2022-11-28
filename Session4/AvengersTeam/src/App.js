import React from "react";
import ReactDOM from "react-dom/client";
import './style.css'
import CardComponent from "./CardComponent";
import './team-details'


const HeadingComponent = () => {
    return (
        <div id="header">
            <h1> The Avengers </h1>
            <img src="https://wallpapercave.com/wp/6lvp4zT.jpg" />
        </div>
    )
}

const CardContainer = () => {
    return (
        <div className="card-container">
            {Avengers.map((member, i) => {
                return (
                    <CardComponent key={member.id} data={member} />
                )
            })}
        </div>
    )
}


const BodyComponent = () => (
    <div>
        <CardContainer />
    </div>
)

const AppLayout = () => {
    return (
        <div>
            <HeadingComponent />
            <BodyComponent />
        </div>
    )
}



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />)