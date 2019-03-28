import axios from 'axios';
export let RECEIVE_RECIPES = "RECEIVE_RECIPES";
export let FETCH_ERROR = 'FETCH_ERROR';

export const receivedRecipes = ( recipes ) => { 
    return {
        type: RECEIVE_RECIPES, 
        recipes: recipes // is the payload
    }
};

export const fetchErrors = (err) => {
    return {
        type: FETCH_ERROR,
        err: err
    }
};

export const fetchRecipes = (searchInput, apiId, apiKey ) => dispatch => {
    const url = `https://api.edamam.com/search?q=${searchInput}&app_id=${apiId}&app_key=${apiKey}&from=0&to=25`
    axios.get(url)
    .then( res => {
        return dispatch(receivedRecipes(res.data.hits));
    })
    .catch((err) => { 
        return dispatch(fetchErrors(err))
    })
};

