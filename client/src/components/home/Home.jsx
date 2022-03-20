import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getAllVideogames } from "../../redux/actions";
import Cards from "../cards/Cards";

function Home() {
    const dispatch = useDispatch();
    const allVideogames = useSelector(state => state.allVideogames)
    function handleClick(e) {
        e.preventDefault();
        dispatch(getAllVideogames());
    }
    
    useEffect(() => {
        dispatch(getAllVideogames())
    }, [dispatch])

    return(
        <div>
            <div>
                <button onClick={(e) => handleClick(e)}>Cargar todos los juegos</button>
            </div>
            <div>
            <Cards allVideogames={allVideogames}/>
            </div>
        </div>
        
    )
}

export default Home;