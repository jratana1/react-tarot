import React, { useState } from "react";
import Card from '../components/card'

export default function CardContainer(props)  {
    const [flipped, setFlipped] = useState(false)
    
    const onCardClick = () => {
        setFlipped(state => !state)
      }


    return  <div className="Card-Container" onClick={onCardClick}>
                    <Card props={props.props} flipped= {flipped} image={props.props.image}/>
            </div>

}