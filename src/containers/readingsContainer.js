import React, { useState } from "react";
import CardReadingContainer from '../containers/readingContainer'

export function shuffle(array) {

    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }

export default function ReadingsContainer(props)  {
    let shuffledCards = <></>

        if ( props.cards) { 
        return shuffledCards = shuffle(props.cards).map((card) => <CardReadingContainer props={card}/>)
    }
    
    return {shuffledCards}
 
}
