import React, { useState } from "react";
import CardReadingContainer from '../containers/readingContainer'
import { shuffle } from "../App"

export default function ReadingsContainer(props)  {
    let shuffledCards = <></>
    // const [ zcounter, setZcounter] = useState(0)
    
// const updateZCounter= () => {
//     setZcounter(zcounter + 1)
//     }

        if ( props.cards) { 
        // return shuffledCards = shuffle(props.cards).map((card) => <CardReadingContainer props={card} zcounter={zcounter} updateZCounter={updateZCounter}/>)
        return shuffledCards = shuffle(props.cards).map((card) => <CardReadingContainer props={card}/>)
    }
    
    return {shuffledCards}
 
}
