import {SET_SEARCH} from "../action"

const initialSearchState = {
    search: []
}
function searchReducer(state = initialSearchState, action)
{
    switch(action.type){
        case SET_SEARCH:
            return {...state, search: action.search}
        default:
            return state;
    }
}

export default searchReducer;