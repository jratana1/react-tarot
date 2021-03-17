import { useSpring, animated as a, interpolate } from "react-spring";
import React, { useState } from "react";
import { useDrag } from 'react-use-gesture'
import Card from '../components/card'
import { connect } from 'react-redux';


function CardReadingContainer(props)  {
    const [flipped, setFlipped] = useState(false)
    const [{ pos }, setPos] = useSpring(() => ({ pos: [0, 0] }))
    const [ tap, setTap] = useState(false)
    // const [ clickCounter, setCounter] = useState(0)

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
      // setCounter(clickCounter+1)  
      // event.target.parentElement.style.zIndex= clickCounter
      }
      
    

    return  <a.div className="Card-Reading-Container" onClick={onCardClick}
                {...bind()}
                style={{ transform: interpolate([pos], ([x, y]) => `translate3d(${x}px,${y}px,0)`) }}>
                    <Card props={props.props} flipped= {flipped} reading={true}/>
             </a.div>
}

const mapStateToProps = (state) => {
  return { items: state.items };
};

export default connect(mapStateToProps)(CardReadingContainer);
