import { useSpring, animated as a, interpolate } from "react-spring";
import React, { useState } from "react";
import { useDrag } from 'react-use-gesture'
import Card from './card'

export default function CardContainer(props)  {
    const [flipped, setFlipped] = useState(false)
    const [{ pos }, setPos] = useSpring(() => ({ pos: [0, 0] }))
    const [ tap, setTap] = useState(false)
    const {transform, opacity} = useSpring({
      opacity: flipped ? 1 : 0,
      transform: `perspective(600px) rotateY(${flipped ? 180 : 0}deg)`,
      config: {mass: 5, tension: 500, friction: 80},
    })

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

    return  <a.div className="Card-Container" onClick={onCardClick}
                {...bind()}
                style={{ transform: interpolate([pos], ([x, y]) => `translate3d(${x}px,${y}px,0)`) }}>
                    <Card props={props.props} flipped= {flipped}/>
             </a.div>
}

// import { useSpring, animated as a } from "react-spring";
// import React, { useState, useEffect } from "react";

// export default function CardFront(props)  {
//     const [flipped, setFlipped] = useState(false)
//     const {transform, opacity} = useSpring({
//       opacity: flipped ? 1 : 0,
//       transform: `perspective(600px) rotateY(${flipped ? 180 : 0}deg)`,
//       config: {mass: 5, tension: 500, friction: 80},
//     })

//     const onCardClick = () => {
//           setFlipped(state => !state)
//       }

//     return  <div className="Card-Container" onClick={onCardClick}>
                
//                 <a.div className="Card-Back" style={{
//                     backgroundImage: `url(${props.props.image})`, 
//                     opacity: opacity.interpolate(o => 1 - o),
//                     transform,}}>
//                 </a.div> 
//                 <a.div className="Card-Front" style={{
//                     opacity,
//                     transform: transform.interpolate(t => `${t} rotateY(180deg)`),
//                 }}>
//                     <div className="Card-Name">{props.props.name}</div>
                    
//                     <p className="Card-Upright">Upright: {props.props.upright}</p>
//                     <p className="Card-Reverse">Reversed: {props.props.reversed}</p>
//                     <p className="Card-Meaning">{props.props.summary}</p>
//                 </a.div>                
//              </div>
// }