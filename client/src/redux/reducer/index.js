import { actions } from "../actions";
const {GET_ALL_VIDEOGAMES, GET_VIDEOGAMES_BY_NAME, GET_GENRES, GET_VIDEOGAME_BY_ID, POST_VIDEOGAME} = actions


const initialState = {
    allVideogames: [],
    genres: [],
    videogame: [],
};

function rootReducer(state = initialState, action) {
    switch(action.type){
        case GET_ALL_VIDEOGAMES:
            return {
                ...state,
                allVideogames: action.payload
            };
        case GET_VIDEOGAMES_BY_NAME:
            return {
                ...state,
                allVideogames: action.payload
            };
        case GET_GENRES:
            return {
                ...state,
                genres: action.payload
            };
        case GET_VIDEOGAME_BY_ID:
            return {
                ...state,
                videogame: action.payload
            };
        case POST_VIDEOGAME:
            return {
                ...state,
            };

        default:
            return {
                ...state
            };
    };
};

export default rootReducer;