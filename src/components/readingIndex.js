import React from "react";
import { useSelector } from "react-redux";
import ReadingListItem from "./readingListItem"


export default function ReadingIndex(props) {
    const readings = useSelector(state => state.readings.readings);
    const flag = useSelector(state => state.readings.flag);
    const lastFive = readings.slice(Math.max(readings.length - 5, 0))
    const li = lastFive.map((reading,index) => {
        return <ReadingListItem key={index} props={reading} cards={props.cards}/>
    })
    
    const onListClick = (event) => { 
        debugger
        }

    return <>
        <div className="Reading-List" onClick={(event) => onListClick(event)}>
            <ul>{li}</ul>
        </div>
    </>
}

