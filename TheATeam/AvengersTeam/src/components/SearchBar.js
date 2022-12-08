import { useState } from "react";

const SearchBar = (props) => {
    const { teamData,setFilteredTeam } = props;

    const [searchText, setSearchText] = useState("")

    const searchMembers = (searchText,teamData) =>{
        console.log(teamData)
        return teamData.filter((member)=>{
            return member.name && member.name.toLocaleLowerCase().includes(searchText.toLocaleLowerCase());
        })
    }

    return (
        <div className="search">
            <form onSubmit={(e) => {
                e.preventDefault();
                const filtertedMembers = searchMembers(searchText, teamData);
                setFilteredTeam(filtertedMembers);
                
            }}>
                <input type="text" placeholder="team member"
                    value={searchText}
                    onChange={(e) => {
                        setSearchText(e.target.value)
                    }} />
                <button>Search</button>
            </form>

        </div>
    )
}

export default SearchBar;