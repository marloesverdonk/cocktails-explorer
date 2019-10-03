import React, { Component } from 'react'
import CocktailImages from './CocktailImages'
import request from 'superagent'

export default class CocktailImagesContainer extends Component {
  state = { images: null }

  componentDidMount() {
   console.log(this.props)
    const cocktail = this.props.match.params.cocktail

    request
      .get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${encodeURIComponent(cocktail)}`)
      .then(response => response.body.drinks)
     //.then(response => console.log(response))
      .then(response => {
       drinkImages: response.map(drink => (drink.strDrinkThumb))
      drinkNames: response.map(drink => (drink.strDrink))
     }  
    .then(response => this.updateImages(response))
     .catch(console.error)
  }

  updateImages(images) {
    this.setState({
      images: images
    })
  }

  render() {
    return (<div><CocktailImages
      images={this.state.images}
      cocktail={this.props.match.params.cocktail}
    />
    </div>)
  } 
}