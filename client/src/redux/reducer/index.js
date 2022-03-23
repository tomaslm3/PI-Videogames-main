import { actions } from "../actions";
const {GET_ALL_VIDEOGAMES, GET_VIDEOGAMES_BY_NAME, GET_GENRES, GET_VIDEOGAME_BY_ID, POST_VIDEOGAME, FILTER_BY_GENRES, FILTER_CREATED_OR_EXIST} = actions


const initialState = {
    backUpVideogames: [],
    allVideogames: [],
    byNameVideogames: [],
    genres: [],
    videogame: [],
};

function rootReducer(state = initialState, action) {
    switch(action.type){
        case GET_ALL_VIDEOGAMES:
            return {
                ...state,
                backUpVideogames: action.payload,
                allVideogames: action.payload
            };
        case GET_VIDEOGAMES_BY_NAME:
            return {
                ...state,
                byNameVideogames: action.payload,
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
        case FILTER_BY_GENRES:
            if(action.payload.length !== 0) {
                const selectedGenres = action.payload
                const filtredGenres = state.backUpVideogames.filter((game) => {
                    return selectedGenres.every(i =>game.genres.includes(i))
                }) 
                return {
                    ...state,
                    allVideogames: filtredGenres
                }
            } else {
                return {
                    ...state,
                    allVideogames: state.backUpVideogames
                }
            };
        case FILTER_CREATED_OR_EXIST:
            if(action.payload !== 'Seleccionar'){
                const filterCreatedOrExist = state.backUpVideogames.filter(game => typeof game.id === action.payload)
                return {
                    ...state,
                    allVideogames: filterCreatedOrExist
                } 
            } else {
                return {
                    ...state,
                    allVideogames: state.backUpVideogames
                }
            }
        default:
            return {
                ...state
            };
    };
};

export default rootReducer;