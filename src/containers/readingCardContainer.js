import { useSpring, animated as a, interpolate } from "react-spring";
import React, { useState, useEffect } from "react";
import { useDrag } from 'react-use-gesture'
import Card from '../components/card'
import { useDispatch, useSelector } from "react-redux";
import { increment } from "../actions/readingsActions";
import { setFlagFalse } from "../actions/readingsActions";
export const deal = (cards) => {

  console.log(`dealing ${cards}`)
}


export default function ReadingCardContainer(props)  {
  const count = useSelector(state => state.readings.counter);
  const flag = useSelector(state => state.readings.flag);
  const scope = useSelector(state => state.readings.readings)
  const dispatch = useDispatch();
  const [flipped, setFlipped] = useState(false)
  const [{ pos }, setPos] = useSpring(() => ({ pos: [0, 0] }))
  const [ tap, setTap] = useState(false)
  const [self, setSelf] = useState(props.props.id)
  
    const bind = useDrag(
        ({ down, movement: xy, tap }) => {

          setPos({ pos: xy, immediate: down })
          setTap(tap)
        },
        { initial: () => pos.getValue() },
        { filterTaps: true }
      )

    const onCardClick = (event) => { 
      if (tap) setFlipped(state => !state)
      dispatch(increment())
   
      event.target.parentElement.style.zIndex= count
      }

      const onMouseDown = (event) => {
        dispatch(increment())
        event.target.parentElement.style.zIndex= count
      }

      useEffect(() => {
        if(flag){
          setPos({pos: [0, 0]})
          setFlipped(false)
        }

        if (flag && (scope.slice(-1)[0].cards[0] === self)) {
        setPos({pos: [300,-100]})
        dispatch(setFlagFalse())
      }

        if (flag && (scope.slice(-1)[0].cards[1] === self))  {
        setPos({pos: [600,-100]})
        dispatch(setFlagFalse())
      }

       if (flag && (scope.slice(-1)[0].cards[2] === self))  {
        setPos({pos: [900,-100]})
        dispatch(setFlagFalse())
      }
      })

    const translate = () => {
      return interpolate([pos], ([x, y]) => `translate3d(${x}px,${y}px,0)` )
    }

    return   <a.div id={`card-${props.props.id}`} className="Card-Reading-Container" onClick={(event) => onCardClick(event)} onMouseDown={(event) => onMouseDown(event)}
                {...bind()}
                style={{ transform: translate()}}>
                    <Card props={props.props.attributes} flipped= {flipped} reading={true}/>
                    
             </a.div>

}
