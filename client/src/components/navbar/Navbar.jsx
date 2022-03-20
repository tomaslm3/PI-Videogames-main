import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getAllVideogames } from "../../redux/actions";
import SearchBar from "../searchBar/SearchBar";

function NavBar() {
    const dispatch = useDispatch();
    function handleClick(e) {
        e.preventDefault();
        dispatch(getAllVideogames());
    }
    return(
        <>
            <div>
                <Link to='/'>
                    <img src="" alt="Logo" />
                </Link>
            </div>
            <div>
                <Link to='/home'>
                    <button onClick={(e) => handleClick(e)}>Inicio</button>
                </Link>
            </div>
            <div>
                <SearchBar />
            </div>
        </>
    )
}

export default NavBar;