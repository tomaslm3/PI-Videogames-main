import React from "react";
import { Link } from "react-router-dom";

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
        </>
    )
}

export default NavBar;