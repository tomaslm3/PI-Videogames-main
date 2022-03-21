import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../searchBar/SearchBar";

function NavBar() {
    
    return(
        <>
            <div>
                <Link to='/'>
                    <img src="" alt="Logo" />
                </Link>
            </div>
            <div>
                <Link to='/home'>
                    <button>Inicio</button>
                </Link>
            </div>
            <div>
                <SearchBar />
            </div>
            <div>
                <Link to='/create'>
                    <button>Nuevo Juego</button>
                </Link>
            </div>
        </>
    )
}

export default NavBar;