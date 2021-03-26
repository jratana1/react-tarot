import React from "react";

export default function ReadingListItem(props) {
    var results = props.cards.filter(obj => {
        return obj.id === props.props.relationships.cards.data[0].id || obj.id === props.props.relationships.cards.data[1].id || obj.id === props.props.relationships.cards.data[2].id
    })

   return <>
     
            <li id={props.props.id}>
                <h2>{props.props.attributes.question}</h2>
                <div>{results[0].attributes.name}</div>
                <div>{results[1].attributes.name}</div>
                <div>{results[2].attributes.name}</div>
            </li>

    </>
}