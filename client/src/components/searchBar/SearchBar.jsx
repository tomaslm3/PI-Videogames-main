import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getVideogamesByName } from "../../redux/actions";

function SearchBar() {
    const dispatch = useDispatch();
    const [name, setName] = useState('');

    function handleInputName(e) {
        e.preventDefault();
        setName(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault();
        dispatch(getVideogamesByName(name))
        setName('');
        e.target.reset();
    }

    return(
        <form onSubmit={e => {handleSubmit(e)}}>
            <input
            type='text'
            value={name}
            onChange={e => handleInputName(e)}>
            </input>
            <button>Buscar</button>
        </form>
    )
}

export default SearchBar;