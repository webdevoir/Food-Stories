import React from 'react';
import SmallImage from '../display/small_image';

class RecipeIndex extends React.Component {
  componentDidMount() {
    this.props.fetchRecipes();
  }

  render() {
    const {recipes} = this.props;
    return (
      <div>
        <p className="item-title">Recipes</p>
        <ul className="item-index">
          {recipes.map(recipe => (
            <SmallImage key={recipe.id}
              isRecipe={true}
              item={recipe}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default RecipeIndex;
