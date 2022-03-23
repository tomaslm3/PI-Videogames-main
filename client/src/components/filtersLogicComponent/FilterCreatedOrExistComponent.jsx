import React, { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import {filterByCreatedOrExist} from '../../redux/actions' 



function FilterCreatedOrExistComponent() {
    const dispatch = useDispatch()
    const [createdOrExist, setCreatedOrExist] = useState('')
    useEffect(() => {
        searchCreatedOrExist()
    }, [createdOrExist])
    
    function handleCreatedOrExist(e) {
            setCreatedOrExist(e.target.value)
    }
    function searchCreatedOrExist() {
        dispatch(filterByCreatedOrExist(createdOrExist))
        console.log(createdOrExist)
    }
    return(
        <div>
                <div>
                    <h3>Generos</h3>
                    <select onChange={e => handleCreatedOrExist(e)}>
                        <option>Seleccionar</option>
                        <option value='string'>Creados</option>
                        <option value='number'>Originales</option>
                        
                    </select>
                </div>
        </div>
    )
}

export default FilterCreatedOrExistComponent;