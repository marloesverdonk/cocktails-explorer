import React, { Component } from 'react'
import CocktailList from './CocktailList'
import request from 'superagent'

export default class CocktailListContainer extends Component {
  state = { cocktails: null }

  componentDidMount() {

    request
      .get('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list')
      //.then(response => console.log(response.body.drinks))
      .then(response => response.body.drinks.map(index => index.strCategory))
      .then(response => this.updateCocktails(response))
      .catch(console.error)
  }

  updateCocktails(cocktails) {
    this.setState({
      cocktails: cocktails
    })
  }

  render() {
    return (<CocktailList cocktails={this.state.cocktails} />)
  }
}