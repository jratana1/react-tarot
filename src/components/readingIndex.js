import React from "react";
import { useSelector, useDispatch } from "react-redux";
import ReadingListItem from "./readingListItem"


export default function ReadingIndex(props) {
    const readings = useSelector(state => state.readings.readings);
    const dispatch = useDispatch();
    const lastFive = readings.slice(Math.max(readings.length - 5, 0))
    const li = lastFive.map((reading) => {
  
        return <ReadingListItem key={reading.id} props={reading} cards={props.cards}/>
    })
    
    const onListClick = (event) => { 
        dispatch({type: 'CLICK_FLAG', payload: event.target.closest("li").id})
        }

    return <>
        <div className="Reading-List" onClick={(event) => onListClick(event)}>
            <ul>{li}</ul>
        </div>
    </>
}

