import {ADD_FAVORITE, DELETE_FAVORITE} from "../action"

function favoritesReducer(state = [], action){
    switch(action.type){
        case ADD_FAVORITE:
            return [...state, action.favorite]
        case DELETE_FAVORITE:
            let newState = [...state]
            let idx = newState.findIndex((val)=> val.id === action.id);
            newState.splice(idx, 1)
            return newState;
        default:
            return state;
    }
}

export default favoritesReducer;