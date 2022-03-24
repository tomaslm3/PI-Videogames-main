import { actions } from "../actions";
const {GET_ALL_VIDEOGAMES, GET_VIDEOGAMES_BY_NAME, GET_GENRES, GET_VIDEOGAME_BY_ID, POST_VIDEOGAME, FILTER_BY_GENRES, FILTER_CREATED_OR_EXIST, ORDER_BY_NAME} = actions


const initialState = {
    backUpVideogames: [],
    filterVideogames: [],
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
                filterVideogames: action.payload,
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
                    filterVideogames: filtredGenres,
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
                const filterCreatedOrExist = state.filterVideogames.filter(game => typeof game.id === action.payload)
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
        case ORDER_BY_NAME:
            let orderGames = [...state.filterVideogames]
            if(action.payload === 'Seleccionar') {
                orderGames = state.backUpVideogames
                return {
                    ...state,
                    allVideogames: orderGames
                }
            }
            if(action.payload === 'A - Z'){
                orderGames.sort((a, b) => {
                    if(a.name.toLowerCase() > b.name.toLowerCase()) return 1;
                    if(a.name.toLowerCase() < b.name.toLowerCase()) return -1;
                    return 0
                });
                return {
                    ...state,
                    allVideogames: orderGames
                }
            }
            if(action.payload === 'Z - A'){
                orderGames.sort((a,b) => {
                    if(a.name.toLowerCase() > b.name.toLowerCase()) return -1;
                    if(a.name.toLowerCase() < b.name.toLowerCase()) return 1;
                    return 0
                });
                return {
                    ...state,
                    allVideogames: orderGames
                }
            }
            
        default:
            return {
                ...state
            };
    };
};

export default rootReducer;