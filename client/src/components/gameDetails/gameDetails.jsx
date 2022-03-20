import React, { useEffect } from "react";
import {useDispatch, useSelector } from "react-redux";
import {  useParams } from "react-router-dom";
import { getVideogameById } from "../../redux/actions/index.js"

function GameDetails() {
    const dispatch = useDispatch();
    const videogame = useSelector(state => state.videogame)
    const {name, image, released, rating, description, genres, platforms} = videogame 
    let {id} = useParams()
    useEffect(() => {
        dispatch(getVideogameById(id));
    }, [dispatch, id])

    return(
        <div>
            <div key={id}>
                <div>
                    <h1>{name}</h1>
                    <img src={image} alt={name} height={200} />
                    <h3>{released}</h3>
                    <h3>{rating} Rating</h3>
                    <h2>{'<'} Generos {'>'}</h2>
                    {genres && genres.map(genre => {
                        return(
                            <h3 key={genre}>{genre}</h3>
                        )
                    })}
                    <h2>{'<'} Plataformas {'>'}</h2>
                    {platforms && platforms.map(platform => {
                        return(
                            <h3 key={platform}>{platform}</h3>
                        )
                    })}
                    
                    <p>{description}</p>
                </div>
            </div>
        </div>
    )
}

export default GameDetails;