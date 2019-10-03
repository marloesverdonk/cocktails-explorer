import React from 'react'
import { Link } from 'react-router-dom'

export default function CocktailImages(props) {
  //console.log(props)
  const { images } = props
  return (
    <div className='cocktail-images'>
      <h1>Cocktail Images</h1>

      <p> Here are some pictures of the {props.cocktail}</p>

      <Link to='/'>Go back to the index</Link>
      <div>
        {images && images.map(url => <img src={url} alt="Cocktail" />)}
        {!images && 'Loading...'}
      </div>


    </div>
  )
}