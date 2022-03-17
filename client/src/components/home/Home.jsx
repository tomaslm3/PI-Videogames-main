import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getAllVideogames } from "../../redux/actions";

function Home() {
    const dispatch = useDispatch();
    const allVideogames = useSelector(state => state.allVideogames)
    
    useEffect(() => {
        dispatch(getAllVideogames())
    })

    return(
        <>
            <div>
                
            </div>
        </>
        
    )
}

export default Home;