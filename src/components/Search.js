import React from "react";
import { MdSearch } from "react-icons/md";
import "../App.css"

const Search = ({handleSearchNote})=>{
    return(
        <div className='search'>
            <MdSearch className='search-icons' size='1.3em'/>
            <input className ="search-input" onChange={(event)=>handleSearchNote(event.target.value)} type="text" placeholder='Поиск...'/>
        </div>
    )
}

export default Search;