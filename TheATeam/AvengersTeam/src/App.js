import React from "react";
import ReactDOM from "react-dom/client";
import './style.css'
import CardComponent from "./components/CardComponent";
import data from './utils/data.json';
import { title } from "./utils/constants";
import SearchBar from "./components/SearchBar";


const HeadingComponent = () => {
    return (
        <div id="header">
            <h1> {title} </h1>
            <img src="https://i.pinimg.com/originals/a3/aa/c7/a3aac7594fccac4afbc27598bd9917d8.jpg" />
        </div>
    )
}

const CardContainer = () => {
    return (
        <div className="card-container">
            {data.map((member, i) => {
                return (
                    <CardComponent key={member.id} data={member} />
                )
            })}
        </div>
    )
}


const SearchPageComponent = () => (
    <div>
        <SearchBar />
        <CardContainer />
    </div>
)

const AppLayout = () => {
    return (
        <div>
            <HeadingComponent />
            <SearchPageComponent />
        </div>
    )
}



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />)