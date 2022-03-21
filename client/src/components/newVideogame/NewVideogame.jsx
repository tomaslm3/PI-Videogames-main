import React, { useEffect, useState } from "react";
import {useDispatch, useSelector} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getAllVideogames, getGenres, postVideogame } from "../../redux/actions";

function validate(input) {
    let errors = {};
    if(!input.name) {
        errors.name = 'Nombre requerido*'
    }
    if(!input.description) {
        errors.description = 'Descripcion requerida*'
    }
    if(!input.released) {
        errors.released = 'Elegir fecha de lanzamiento*'
    }
    if(input.rating < 0 || input.rating > 5) {
        errors.rating = 'Ratings validos de 0 a 5*'
    }
    if(input.platforms.length < 1) {
        errors.platforms = 'Selecionar por lo menos una plataforma*'
    }
    if(input.genres.length < 1) {
        errors.genres = 'Selecionar por lo menos un genero*'
    }
    return errors
}

function NewVideogame() {
    const dispatch = useDispatch()
    const genres = useSelector(state => state.genres);
    const allVideogames = useSelector(state => state.allVideogames)
    const navigate = useNavigate()
    useEffect(() => {
        dispatch(getGenres())
        dispatch(getAllVideogames())
    }, [dispatch])

    const platforms = () => {
        let platformsList = allVideogames.map(game => game.platforms);
        platformsList = platformsList.flat();
        let platforms = platformsList.filter((platform, index) => {
            return platformsList.indexOf(platform) === index;
        });
        return platforms
    }
    
    const [errors, setErrors] = useState({firstTry: true})
    const [input, setInput] = useState({
        name: '',
        description: '',
        released: '',
        rating: '',
        platforms: [],
        genres: []
    });

    function handleChange(e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        });
        if(!errors.firstTry){
            setErrors(validate({
                ...input,
                [e.target.name]: e.target.value
            }))
        }
        
    }

    function handleGenres(e) {
        if( e.target.value !== 'Seleccionar' && !input.genres.includes(e.target.value)){
            setInput({
                ...input,
                genres: [...input.genres, e.target.value]
            })
            setErrors(validate({
                ...input,
                genres: [...input.genres, e.target.value]
            }))
        }
    }

    function handlePlatforms(e) {
        if( e.target.value !== 'Seleccionar' && !input.platforms.includes(e.target.value)){
            setInput({
                ...input,
                platforms: [...input.platforms, e.target.value]
            })
            setErrors(validate({
                ...input,
                platforms: [...input.platforms, e.target.value]
            }))
        }
    }

    function deletePlatform(e) {
        setInput({
            ...input,
            platforms: input.platforms.filter(platform => platform !== e.target.value)
        })
    }

    function deleteGenre(e) {
        setInput({
            ...input,
            genres: input.genres.filter(genre => genre !== e.target.value)
        })
    }
    function handleCheckErrors(e) {
        e.preventDefault();
        setErrors(validate({
            ...input,
            [e.target.name]: e.target.value
        }))
        handleSubmit(e)
    }

    function handleSubmit(e) {
        e.preventDefault();
        if(errors.firstTry){
            alert('Completar los campos correspondientes')
        } else {
            dispatch(postVideogame(input));
            alert('Juego creado exitosamente!');
            setInput({
                name: '',
                description: '',
                released: '',
                rating: '',
                platforms: [],
                genres: []
            });
            navigate('/home')
        }
    
    }

    return (
        <div>
            <div>
                <h1>Añadir juego</h1>
                <form onSubmit={e => handleSubmit(e)}>
                    <div>
                        <div>
                            <label>Nombre</label>
                            <input
                            type='text'
                            name="name" 
                            value={input.name}
                            onChange={e => handleChange(e)}
                            />
                            {errors.name && (<p>{errors.name}</p>)}
                        </div>
                        <div>
                            <label>Fecha de lanzamiento</label>
                            <input
                            type='date'
                            name="released" 
                            value={input.released}
                            onChange={e => handleChange(e)}
                            />
                            {errors.released && (<p>{errors.released}</p>)}
                        </div>
                        <div>
                            <label>Rating</label>
                            <input
                            type='number'
                            name="rating" 
                            value={input.rating}
                            onChange={e => handleChange(e)}
                            />
                            {errors.rating && (<p>{errors.rating}</p>)}
                        </div>
                    </div>
                    <div>
                        <div>
                            <div>
                                <h3>Plataformas</h3>
                                <select onChange={e => handlePlatforms(e)}>
                                    <option>Seleccionar</option>
                                    {platforms().map(platform => {
                                        return(
                                            <option key={platform} value={platform}>{platform}</option>
                                            )
                                        })}
                                </select>
                                {errors.platforms && (<p>{errors.platforms}</p>)}
                            </div>
                            <div>
                                {input.platforms.map((platform) => {
                                    return (
                                        <div key={platform}>
                                            <p>{platform}</p>
                                            <button onClick={e => {deletePlatform(e)}} value={platform}>X</button>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
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
                                {errors.genres && (<p>{errors.genres}</p>)}
                            </div>
                            <div>
                                {input.genres.map((genre) => {
                                        return (
                                            <div key={genre}>
                                                <p>{genre}</p>
                                                <button onClick={e => {deleteGenre(e)}} value={genre}>X</button>
                                            </div>
                                        )
                                    })}
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <label>Descripcion</label>
                            <textarea name="description"
                            value={input.description}
                            onChange={e => handleChange(e)}>
                            </textarea>
                            {errors.description && (<p>{errors.description}</p>)}
                        </div>
                    </div>
                    <div>
                        {errors.name || errors.released || errors.rating || errors.platforms || errors.genres || errors.description ?<button disabled>Crear juego</button>:<button onClick={e => handleCheckErrors(e)}>Crear juego</button>}
                    </div>
                </form>
            </div>
        </div>
    )
}


export default NewVideogame;