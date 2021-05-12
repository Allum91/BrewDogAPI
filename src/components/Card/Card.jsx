import React from 'react';
import { useEffect, useState } from 'react';
import styles from './Card.module.scss';

const Card = () => {
  const [beers, setBeers] = useState([]);
  const [isFaceDown, setIsFaceDown] = useState(false);

  const flipStyles = isFaceDown ? styles.faceDown : "";

  const handleClick = async () => {
    // Write a fetch to get a response from an API
    const apiResponse = await fetch("https://api.punkapi.com/v2/beers");
    const jsonResponse = await apiResponse.json();
    console.log(jsonResponse);
    setBeers(jsonResponse);
  };

  // USEEFFECT!
  // sideeffect: happens as a result of something else
  useEffect(() => {
    handleClick();
  }, []);
  return (
    <div>
      Dashboard
            {/* {beers.map((beer) => (
        <>
        <section className={`${styles.recipeCard} ${flipStyles}`}
        onClick={() => setIsFaceDown(!isFaceDown)}>
        <div className={styles.cardFront}>
          <img src={beer.image_url} className={styles.beerImage}/>
          <h1>{beer.id}: {beer.name}</h1>
          <h4>ABV: {beer.abv}</h4>
        </div>
        <div className={styles.cardBack}>
          <p>{beer.description}</p>
        </div>
        </section>
        </>
      ))} */}
    </div>
  )
}

export default Card
