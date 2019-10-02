import React, { Component } from 'react'

export default class CocktailList extends Component {
  renderCocktails(cocktail){
    return(
      <li key={cocktail}>
        {cocktail}
      </li>
    )
  }
  
  render() {
    return (
      <div className="cocktails-list">
         {<ul>
          {!this.props.cocktails ? 'Loading...' : 
          this.props.cocktails.map(this.renderCocktails)}
        </ul>}
      </div>
    )
  }
}