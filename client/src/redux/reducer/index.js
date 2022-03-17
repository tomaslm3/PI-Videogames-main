import { GET_ALL_VIDEOGAMES } from "../actions";

const initialState = {
    allVideogames: []
};

function rootReducer(state = initialState, action) {
    switch(action.type){
        case GET_ALL_VIDEOGAMES:
            return {
                ...state,
                allVideogames: action.payload
            };

        default:
            return {
                ...state
            };
    };
};

export default rootReducer;