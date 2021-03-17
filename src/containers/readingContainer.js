import { useSpring, animated as a, interpolate } from "react-spring";
import React, { useState } from "react";
import { useDrag } from 'react-use-gesture'
import Card from '../components/card'

export default function ReadingContainer(props)  {
    const [flipped, setFlipped] = useState(false)
    const [{ pos }, setPos] = useSpring(() => ({ pos: [0, 0] }))
    const [ tap, setTap] = useState(false)

    const bind = useDrag(
        ({ down, movement: xy, tap }) => {
          setPos({ pos: xy, immediate: down })
          setTap(tap)
        },
        { initial: () => pos.getValue() },
        { filterTaps: true }
      )

    const onCardClick = () => {
        if (tap) setFlipped(state => !state)
      }

    return  <a.div className="Reading-Container" onClick={onCardClick}
                {...bind()}
                style={{ transform: interpolate([pos], ([x, y]) => `translate3d(${x}px,${y}px,0)`) }}>
                    <Card props={props.props} flipped= {flipped} reading={true}/>
             </a.div>
}
