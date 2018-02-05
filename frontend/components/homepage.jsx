import React from 'react';
import BigImage from './display/big_image';

class Homepage extends React.Component {
  componentDidMount() {
    this.props.fetchRecipes();
    this.props.fetchStories();
  }

  render() {
    const {stories, recipes} = this.props;
    console.log(stories);
    console.log(recipes);
    if (stories.length < 1 || recipes.length < 1) return (<h1>Loading...</h1>);
    console.log(stories[stories.length-1]);
    return (
      <div>
        <div className="latest-story">
          <p className="item-title">Today's Story</p>
          <BigImage imgUrl={stories[stories.length-1].img_url} />
          <p className="post-title">{stories[stories.length-1].title}</p>
          <p className="">{stories[stories.length-1].sub_title}</p>
        </div>
      </div>
    );
  }
}

export default Homepage;
