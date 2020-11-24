import React from "react"
function Search(props){
    return(
        <>
        Search name:
        <input  onChange = {props.handleChange}  name="search" value ={props.search}/>
        </>
    )
}

export default Search