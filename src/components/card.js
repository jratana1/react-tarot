import { useSpring, animated as a } from "react-spring";
import React from "react";
import tarotBack from '../assets/tarotBack.png'

export default function Card(props) {
    const {transform, opacity} = useSpring({
        opacity: props.flipped ? 1 : 0,
        transform: `perspective(600px) rotateY(${props.flipped ? 180 : 0}deg)`,
        config: {mass: 5, tension: 500, friction: 80},
      })

    const backImage = () => {
        if(props.reading) {return `${tarotBack}`}
        else {return props.props.image}
        }

    const frontImage = () => {
        if(props.reading) {return props.props.image}
        else { return null }
        }
    
    const frontText = () => {
        if (props.reading) {return null}
        else {
        return <>
        <h2 className="Card-Name">{props.props.name}</h2>
        <p className="Card-Upright">Upright: {props.props.upright}</p>
        <p className="Card-Reverse">Reversed: {props.props.reversed}</p>
        <p className="Card-Meaning">{props.props.summary}</p>
        </>
        }
    }

    return <>
    <a.div className="Card-Back" style={{
        backgroundImage: `url(${backImage()})`,
        opacity: opacity.interpolate(o => 1 - o),
        transform,}}>
    </a.div> 
    <a.div className="Card-Front" style={{
        opacity,
        transform: transform.interpolate(t => `${t} rotateY(180deg)`),
        backgroundImage: `url(${frontImage()})`
    }}>
        {frontText()}
    </a.div>  
    </>
}

