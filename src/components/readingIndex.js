import React from "react";
import { useSelector } from "react-redux";
import ReadingListItem from "./readingListItem"


export default function ReadingIndex(props) {
    const readings = useSelector(state => state.readings.readings);
    const li = readings.map((reading) => {
        return <ReadingListItem props={reading} cards={props.cards}/>
    })
    

    return <>
        <div className="Reading-List">
            <ul>{li}</ul>
        </div>
    </>
}

