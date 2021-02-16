import React from 'react';

const SearchPage = (props) => {
    const [search, setSearch] = useState("")

    return (
        <>
        <input type = "text" placeholder = "Enter search here..." 
        value = "search" onChange = {(e) => {setState(e.value)}}>
        </input>
        <button>Submit</button>

        <div>Search Page</div>
        </>
    )
}

export default SearchPage