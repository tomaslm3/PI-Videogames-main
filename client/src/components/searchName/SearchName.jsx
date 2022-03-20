import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getVideogamesByName } from "../../redux/actions";
import Cards from "../cards/Cards";
import {  useParams } from "react-router-dom";

function SearchGames() {
    const dispatch = useDispatch();
    const allVideogames = useSelector(state => state.byNameVideogames)
    let {name} = useParams();
    
    useEffect(() => {
        dispatch(getVideogamesByName(name));
    }, [dispatch, name])

    return(
        <div>
            <div>
                <h1>Resultados para "{name}"</h1>
            </div>
            <div>
            <Cards allVideogames={allVideogames}/>
            </div>
        </div>
        
    )
}

export default SearchGames;