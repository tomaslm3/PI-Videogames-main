import axios from "axios";

export const actions = {
    GET_ALL_VIDEOGAMES: 'GET_ALL_VIDEOGAMES',
    GET_VIDEOGAMES_BY_NAME: 'GET_VIDEOGAMES_BY_NAME',
    GET_GENRES: 'GET_GENRES',
    GET_VIDEOGAME_BY_ID: 'GET_VIDEOGAME_BY_ID',
    POST_VIDEOGAME: 'POST_VIDEOGAME',
};

const { GET_ALL_VIDEOGAMES, GET_VIDEOGAMES_BY_NAME, GET_GENRES, GET_VIDEOGAME_BY_ID, POST_VIDEOGAME } = actions;

export function getAllVideogames() {
    return async function(dispatch) {
        try {
            var json = await axios.get('http://localhost:3001/videogames')
            return dispatch({
                type: GET_ALL_VIDEOGAMES,
                payload: json.data
            })
        } catch(error){
            console.log('Error action getAllVideogames ' + error)
        }
    }
};

export function getVideogamesByName(payload) {
    return async function (dispatch) {
        try {
            var json = await axios.get(`http://localhost:3001/videogames?name=${payload}`)
            return dispatch({
                type: GET_VIDEOGAMES_BY_NAME,
                payload: json.data
            })
        } catch(error){
            console.log('Error action getVideogamesByName ' + error)
        }
    }
};

export function getGenres() {
    return async function (dispatch) {
        try {
            var json = await axios.get('http://localhost:3001/genres')
            return dispatch({
                type: GET_GENRES,
                payload: json.data
            })
        } catch(error){
            console.log('Error action getGenres ' + error)
        }
    }
};

export function getVideogameById(payload) {
    return async function (dispatch) {
        try {
            var json = await axios.get(`http://localhost:3001/videogame/${payload}`)
            return dispatch({
                type: GET_VIDEOGAME_BY_ID,
                payload: json.data
            })
        } catch(error){
            console.log('Error action getVideogameById ' + error)
        }
    }
};

export function postVideogame(payload) {
    return async function (dispatch) {
        try {
            var json = await axios.post('http://localhost:3001/videogame', payload)
            return dispatch({
                type: POST_VIDEOGAME,
                payload: json.data
            })
        } catch (error) {
            console.log('Error action newVideogame')
        }
    }
};

