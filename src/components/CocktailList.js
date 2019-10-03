import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class CocktailList extends Component {
  renderCocktails(cocktail){
    return(
      <li key={cocktail}>
        <Link to={`/cocktails/${cocktail}`}>{cocktail}</Link>
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