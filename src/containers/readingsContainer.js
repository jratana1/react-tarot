import React from "react";
import CardReadingContainer from '../containers/readingContainer'
import { shuffle } from "../App"

export default function ReadingsContainer(props)  {
    let shuffledCards = <></>

    if ( props.cards) { 
    return shuffledCards = shuffle(props.cards).map((card) => <CardReadingContainer props={card}/>)
    }
    
    return  {shuffledCards}
}
