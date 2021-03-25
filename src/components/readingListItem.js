import React from "react";

export default function ReadingListItem(props) {
    var results = props.cards.filter(obj => {
        return obj.id === props.props.cards[0] || obj.id === props.props.cards[1] || obj.id === props.props.cards[2]
      })

   return <>
     
            <li>
                <h2>{props.props.question}</h2>
                <div>{results[0].attributes.name}</div>
                <div>{results[1].attributes.name}</div>
                <div>{results[2].attributes.name}</div>
            </li>

    </>
}