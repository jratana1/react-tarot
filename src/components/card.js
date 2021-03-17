import { useSpring, animated as a } from "react-spring";
import React from "react";

export default function Card(props) {
    const {transform, opacity} = useSpring({
        opacity: props.flipped ? 1 : 0,
        transform: `perspective(600px) rotateY(${props.flipped ? 180 : 0}deg)`,
        config: {mass: 5, tension: 500, friction: 80},
      })


    return <>
    <a.div className="Card-Back" style={{
        backgroundImage: `url(${props.props.image})`, 
        opacity: opacity.interpolate(o => 1 - o),
        transform,}}>
    </a.div> 
    <a.div className="Card-Front" style={{
        opacity,
        transform: transform.interpolate(t => `${t} rotateY(180deg)`),
    }}>
        {/* <CardFront props = {props} /> */}
        <div className="Card-Name">{props.props.name}</div>
        
        <p className="Card-Upright">Upright: {props.props.upright}</p>
        <p className="Card-Reverse">Reversed: {props.props.reversed}</p>
        <p className="Card-Meaning">{props.props.summary}</p>
    </a.div>  
    </>
}



