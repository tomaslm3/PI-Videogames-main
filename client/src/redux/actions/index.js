import axios from "axios";

export const actions = {
    GET_ALL_VIDEOGAMES: 'GET_ALL_VIDEOGAMES',
};

const { GET_ALL_VIDEOGAMES } = actions;

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
}