import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getAllVideogames } from "../../redux/actions";
import Cards from "../cards/Cards";
import FilterGenresComponent from "../filtersLogicComponent/FilterGenresComponent";
import FilterCreatedOrExistComponent from "../filtersLogicComponent/FilterCreatedOrExistComponent";
import OrderNamesComponent from "../filtersLogicComponent/OrderNamesComponent";


function Home() {
    const dispatch = useDispatch();
    const allVideogames = useSelector(state => state.allVideogames)
    
    useEffect(() => {
        dispatch(getAllVideogames())
    }, [dispatch])
    

    return(
        <div>
            <div>
                <FilterGenresComponent />
            </div>
            <div>
                <FilterCreatedOrExistComponent />
            </div>
            <div>
                <OrderNamesComponent />
            </div>
            <div>
                <Cards allVideogames={allVideogames}/>
            </div>
        </div>
        
    )
}

export default Home;