import React, { useState } from "react";
import CardContainer from './cardContainer'


export default function CardsIndex(props)  {

    return  <div className="Card-Index">
                {props.props.map((card) => <CardContainer props={card}/>)}
            </div>

}