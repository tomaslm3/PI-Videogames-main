import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import {filterByGenres, getGenres} from '../../redux/actions' 


function FilterGenresComponent() {
    const dispatch = useDispatch();
    const genres = useSelector(state => state.genres);

    useEffect(() => {
        dispatch(getGenres())
    }, [dispatch])


    const [filter, setfilter] = useState({
        genres: []
    })
    
    function handleGenres(e) {
        if( e.target.value !== 'Seleccionar' && !filter.genres.includes(e.target.value)){
            setfilter({
                ...filter,
                genres: [...filter.genres, e.target.value]
            })
        }
    }
    function handleDeleteGenres(e) {
        setfilter({
            ...filter,
            genres: filter.genres.filter(genre => genre !== e.target.value)
        })
    }
    
    function searchGenres() {
        dispatch(filterByGenres(filter.genres))
    }
    return(
        <div>
            <div>
                <div>
                    <h3>Generos</h3>
                    <select onChange={e => handleGenres(e)}>
                        <option>Seleccionar</option>
                        {genres.map(genre => {
                            return(
                                <option key={genre.name} value={genre.name}>{genre.name}</option>
                                )
                            })}
                    </select>
                </div>
                <div>
                    <button onClick={searchGenres}>Genres</button>
                </div>
                <div>
                    {filter.genres.map((genre) => {
                            return (
                                <div key={genre}>
                                    <p>{genre}</p>
                                    <button onClick={e => {handleDeleteGenres(e)}} value={genre}>X</button>
                                </div>
                            )
                        })}
                </div>
            </div>
        </div>
    )
}

export default FilterGenresComponent;
