import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import './style.css'
import CardComponent from "./components/CardComponent";
import data from './utils/data.json';
import { title } from "./utils/constants";
import SearchBar from "./components/SearchBar";
import NoResultsComponent from "./components/NoResultsComponent";
import userData from './utils/userData.json'
import { createBrowserRouter, Outlet, RouterProvider,Link } from 'react-router-dom'
import AboutUs from "./components/AboutUs";
import ErrorComponent from "./components/ErrorComponent";
import MemberComponent from "./components/MemberComponent";


const HeadingComponent = () => {
    return (
        <div id="header">
            <h1> {title} </h1>
            <img src="https://i.pinimg.com/originals/a3/aa/c7/a3aac7594fccac4afbc27598bd9917d8.jpg" />
        </div>
    )
}

const CardContainer = ({ teamData }) => (
    !teamData.length ?
        (<NoResultsComponent />)
        : (
            <div className="card-container">
                {teamData.map((member, i) => {
                    return (
                        <Link to={`/member/${member.id}`}>
                            <CardComponent key={member.id} data={member} />
                        </Link>
                    )
                })}
            </div>
        )
)


const SearchPageComponent = () => {
    const [teamData, setTeamData] = useState([]);
    const [filteredTeam, setFilteredTeam] = useState([]);

    useEffect(() => {
        fetchTeamData();
    }, [])

    async function fetchTeamData() {
        const team = [];
        for (let i = 0; i < userData.length; i++) {
            const data = await fetch(`https://api.github.com/users/${userData[i].username}`);
            const json = await data.json();
            team.push(json);
        }
        console.log('team', team)
        setTeamData(team);
        setFilteredTeam(team)
    }


    return (
        <div>
            <SearchBar teamData={teamData} setFilteredTeam={setFilteredTeam} />
            <CardContainer teamData={filteredTeam} />
        </div>
    )
}

const AppLayout = () => {
    return (
        <div>
            <HeadingComponent />
            <Outlet />
        </div>
    )
}

const appRoot = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        errorElement: <ErrorComponent />,
        children: [
            {
                path: "/member/:id",
                element: <MemberComponent />
            },
            {
                path: "/search",
                element: <SearchPageComponent />
            }
        ]
    },
    {
        path: "/about-us",
        element: <AboutUs />
    }
])


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRoot} />)