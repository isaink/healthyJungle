import { SEARCH_INPUT } from './../Redux_Actions/RecipesActions';

export const RecipesReducer = ( initialState = { search }, action) => {
    switch(action.type){
        case SEARCH_INPUT:
            return [
                ...initialState,
                ...action.search  //payload
            ]
        default:
            return initialState;
    }
};