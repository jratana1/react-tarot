import React from "react";
import ReadingCardContainer from './readingCardContainer'
import Reading from '../components/reading'
import ReadingIndex from "../components/readingIndex";

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

        if ( props.cards ) { 
        shuffledCards = shuffle(props.cards).map((card) => <ReadingCardContainer key= {card.id} props={card} />)
    }
    
    return <div className="Reading-Container">
    {shuffledCards}
    <Reading cards={props.cards}/>
    <ReadingIndex cards={props.cards}/>
          </div>
 
}

