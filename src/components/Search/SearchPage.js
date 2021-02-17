import React, {useState} from 'react';
import GifDisplay from "../Gif/GifDisplay";

const SearchPage = (props) => {
    const [query, setQuery] = useState("")
    const [rating, setRating] = useState("pg")
    const [limit, setLimit] = useState(25)
    const [gifs, setGifs] = useState([])
    const [error, setError] = useState("")
    
    async function getGifs(query, rating, limit)
    {
        const key = "eu6ZqjsoWibLXkFlAS3k3glXEvjp84iO"
        const url = `https://api.giphy.com/v1/gifs/search?api_key=${key}&q=${query}&limit=${limit}&rating=${rating}`;
        try{
            setError("")
            let response = await fetch(url);
            let json = await response.json();
            
            let newGifs = json.data.map((val)=>{ 
                return {id: val.id, title: val.title, url: val.images.original.url}
            })
            //console.log(newGifs)
            setGifs(newGifs)
            console.log(json);
            
        } catch(e) {
            setError("Something went wrong")
            setGifs([])
        }
    }
    return (
        <>
        <div>
            <input type = "text" placeholder = "Enter search here..." 
                value = {query} onChange = {(e) => {setQuery(e.target.value)}}>
            </input>
            <select id = "rating" value = {rating} onChange=  {(e)=>{setRating(e.target.value)}}>
                <option value = "g">G</option>
                <option value = "pg">PG</option>
                <option value = "pg-13">PG-13</option>
                <option value = "r">R</option>
            </select>
            <select id = "Limit" value = {limit} onChange=  {(e)=>{setLimit(e.target.value)}}>
                <option value = "10">10</option>
                <option value = "15">15</option>
                <option value = "25">25</option>
                <option value = "50">50</option>
            </select>
            <button
                onClick = {(e) => getGifs(query, rating, limit)}
            >Search</button>
        </div>
        
        {error.length > 0 && <h1>{error}</h1>}
        {error.length === 0 && 
            gifs.map((v) => <GifDisplay key = {v.id} src = {v.url}/>)}
        </>
    )
}

export default SearchPage