import { RECEIVE_RECIPES  } from './../Redux_Actions/RecipesActions';

export const RecipesReducer = ( initialState = [ ], action) => {
    switch(action.type){
        case RECEIVE_RECIPES:
            return [
                ...initialState,
                ...action.recipes  //payload
            ]
        default:
            return initialState;
    }
};