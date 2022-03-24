import React, { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import {orderByName} from '../../redux/actions' 



function OrderNamesComponent() {
    const dispatch = useDispatch()
    const [orderNames, setOrderNames] = useState('')
    useEffect(() => {
        searchByOrderNames()
    }, [orderNames])
    
    function handleOrderNames(e) {
        setOrderNames(e.target.value)
    }
    function searchByOrderNames() {
        dispatch(orderByName(orderNames))
    }
    return(
        <div>
                <div>
                    <h3>Nombres</h3>
                    <select onChange={e => handleOrderNames(e)}>
                        <option>Seleccionar</option>
                        <option value='A - Z'>A - Z</option>
                        <option value='Z - A'>Z - A</option>
                        
                    </select>
                </div>
        </div>
    )
}

export default OrderNamesComponent;