import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ReadingListItem from "./readingListItem"


export default function ReadingIndex(props) {
    const readings = useSelector(state => state.readings.readings);
    const dispatch = useDispatch();
    const lastFive = readings.slice(Math.max(readings.length - 5, 0))
    const li = lastFive.map((reading) => {
  
        return <ReadingListItem key={reading.id} props={reading} cards={props.cards}/>
    })
    
    useEffect(() => {
    if (readings.length > 0) 
        {
        let list = document.getElementsByClassName("list-item")
        
        for (let item of list) {
            item.style.backgroundColor = "";
        }
            
        let last = document.getElementById(readings.slice(-1)[0].id)
        last.style.backgroundColor = "grey"
        }
     }
    )

    const onListClick = (event) => { 
        debugger
        dispatch({type: 'CLICK_FLAG', payload: event.target.closest("li").id})
  
        let list = document.getElementsByClassName("list-item")
        for (let item of list) {
            item.style.backgroundColor = "";
        }
        event.target.closest("li").style.backgroundColor = "grey"
        }

    return <>
        <div className="Reading-List" onClick={(event) => onListClick(event)}>
            <ul>{li}</ul>
        </div>
    </>
}

