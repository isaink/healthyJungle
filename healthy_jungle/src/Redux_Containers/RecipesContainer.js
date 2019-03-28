import { connect } from 'react-redux';
import Recipes from './../Components/RecipesPage/Recipes';
import { fetchRecipes } from './../Redux_Actions/RecipesActions';

const mapStateToProps = (state) => {
    console.log(state,'STATE')
    return { 
        // user: state.userAuth.user,
        recipes: state.recipes
    }
};

const mapDispatchToProps = (dispatch) => {
    console.log( props )
    return {
        fetchRecipes: () => dispatch(fetchRecipes()),
    }
};

export default connect(mapStateToProps, mapDispatchToProps )(Recipes)