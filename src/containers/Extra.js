import React, { useState } from 'react'
import { useSpring, useSprings, animated, interpolate, config } from 'react-spring'
import { useGesture } from 'react-use-gesture'
import { useDrag } from 'react-use-gesture'
import { scale, dist } from 'vec-la'


// const cards = [
//   'https://upload.wikimedia.org/wikipedia/en/f/f5/RWS_Tarot_08_Strength.jpg',
//   'https://upload.wikimedia.org/wikipedia/en/5/53/RWS_Tarot_16_Tower.jpg',
//   'https://upload.wikimedia.org/wikipedia/en/9/9b/RWS_Tarot_07_Chariot.jpg',
//   'https://upload.wikimedia.org/wikipedia/en/d/db/RWS_Tarot_06_Lovers.jpg',
//   'https://upload.wikimedia.org/wikipedia/en/thumb/8/88/RWS_Tarot_02_High_Priestess.jpg/690px-RWS_Tarot_02_High_Priestess.jpg',
//   'https://upload.wikimedia.org/wikipedia/en/d/de/RWS_Tarot_01_Magician.jpg'
// ]
// const to = i => ({ pos: [i*10, i*10], delay: i * 100 })
// const from = i => ({ pos: [0, -1000] })
// export default function Deck() {
//     const [ props , set] = useSprings(cards.length,(i) => ({ ...to(i), from: from(i) }))
  
//     const bind = useDrag(
//       ({ args: [index], down, movement: pos }) => {
//         set((i) => {
//             if (index !== i) return
//             return { pos, immediate: down }
//           })
//       },
//     //   { initial: () => pos.getValue() }
//     )
//     return props.map(({ pos }, i) => (
//         <animated.div
//         key={i}
//       className="Tarot"
//         {...bind(i)}
//         style={{ transform: interpolate([pos], ([x, y]) => `translate3d(${x}px,${y}px,0)`), backgroundImage: `url(${cards[i]})` }}
//       />
//     ))
//   }

// const to = i => ({ x: 0, y: i * -4, scale: 1, rot: -10 + Math.random() * 20, delay: i * 100 })
// const from = i => ({ x: 0, rot: 0, scale: 1.5, y: -1000 })
// const trans = (r, s) => `perspective(1500px) rotateX(30deg) rotateY(${r / 10}deg) rotateZ(${r}deg) scale(${s})`

// export default function Deck() {
//   const [gone] = useState(() => new Set()) // The set flags all the cards that are flicked out
//   const [props, set] = useSprings(cards.length, (i) => ({ ...to(i), from: from(i) })) // Create a bunch of springs using the helpers above
//   // Create a gesture, we're interested in down-state, delta (current-pos - click-pos), direction and velocity
//   const bind = useDrag(({ args: [index], down, movement: [mx, my], direction: [xDir], velocity }) => {
//     const trigger = velocity > 0.2 // If you flick hard enough it should trigger the card to fly out
//     const dir = xDir < 0 ? -1 : 1 // Direction should either point left or right
//     if (!down && trigger) gone.add(index) // If button/finger's up and trigger velocity is reached, we flag the card ready to fly out
//     set((i) => {
//       if (index !== i) return // We're only interested in changing spring-data for the current spring
//       const isGone = gone.has(index)
//       const x = mx// When a card is gone it flys out left or right, otherwise goes back to zero
//       const y = my
//       const rot = mx / 100 + (isGone ? dir * 10 * velocity : 0) // How much the card tilts, flicking it harder makes it rotate faster
//       const scale = down ? 1.1 : 1 // Active cards lift up a bit
//       return { x, y, rot, scale, delay: undefined, config: { friction: 50, tension: down ? 800 : isGone ? 200 : 500 } }
//     })
// if (!down && gone.size === cards.length) setTimeout(() => gone.clear() || set((i) => to(i)), 600)
//   }, 
//   )
//   // Now we're just mapping the animated values to our view, that's it. Btw, this component only renders once. :-)
//   return props.map(({ x, y, rot, scale }, i) => (
//     <animated.div className="Card-container" key={i} style={{ transform: interpolate([x, y], (x, y) => `translate3d(${x}px,${y}px,0)`) }}>
//       {/* This is the card itself, we're binding our gesture to it (and inject its index so we know which is which) */}
//       <animated.div className="Card" {...bind(i)} style={{ transform: interpolate([rot, scale], trans), backgroundImage: `url(${cards[i]})` }} />
//     </animated.div>
//   ))
// }

// const to = i => ({ x: 0, y: i * -4, scale: 1, rot: -10 + Math.random() * 20, delay: i * 100 })
// const from = i => ({ x: 0, rot: 0, scale: 1.5, y: -1000 })
// const trans = (r, s) => `perspective(1500px) rotateX(30deg) rotateY(${r / 10}deg) rotateZ(${r}deg) scale(${s})`

// export default function Deck() {
//   const [gone] = useState(() => new Set()) // The set flags all the cards that are flicked out
//   const [props, set] = useSprings(cards.length, (i) => ({ ...to(i), from: from(i) })) // Create a bunch of springs using the helpers above
//   // Create a gesture, we're interested in down-state, delta (current-pos - click-pos), direction and velocity
//   const bind = useDrag(({ args: [index], down, movement: [mx], direction: [xDir], velocity }) => {
//     const trigger = velocity > 0.2 // If you flick hard enough it should trigger the card to fly out
//     const dir = xDir < 0 ? -1 : 1 // Direction should either point left or right
//     if (!down && trigger) gone.add(index) // If button/finger's up and trigger velocity is reached, we flag the card ready to fly out
//     set((i) => {
//       if (index !== i) return // We're only interested in changing spring-data for the current spring
//       const isGone = gone.has(index)
//       const x = isGone ? (200 + window.innerWidth) * dir : down ? mx : 0 // When a card is gone it flys out left or right, otherwise goes back to zero
//       const rot = mx / 100 + (isGone ? dir * 10 * velocity : 0) // How much the card tilts, flicking it harder makes it rotate faster
//       const scale = down ? 1.1 : 1 // Active cards lift up a bit
//       return { x, rot, scale, delay: undefined, config: { friction: 50, tension: down ? 800 : isGone ? 200 : 500 } }
//     })
//     if (!down && gone.size === cards.length) setTimeout(() => gone.clear() || set((i) => to(i)), 600)
//   })
//   // Now we're just mapping the animated values to our view, that's it. Btw, this component only renders once. :-)
//   return props.map(({ x, y, rot, scale }, i) => (
//     <animated.div className="Card-container" key={i} style={{ transform: interpolate([x, y], (x, y) => `translate3d(${x}px,${y}px,0)`) }}>
//       {/* This is the card itself, we're binding our gesture to it (and inject its index so we know which is which) */}
//       <animated.div className="Card" {...bind(i)} style={{ transform: interpolate([rot, scale], trans), backgroundImage: `url(${cards[i]})` }} />
//     </animated.div>
//   ))
// }

// export default function Deck() {
//     const [ props , set] = useSprings(4,(i) => ({ pos: [i*10, i*10] }))
  
//     const bind = useDrag(
//       ({ args: [index], down, movement: pos }) => {
//         set((i) => {
//             if (index !== i) return
//             return { pos, immediate: down }
//           })
//       },
//       { initial: () => pos.getValue() }
//     )
//     return props.map(({ pos }, i) => (
//         <animated.div
//         key={i}
//       className="Rocket"
//         {...bind(i)}
//         style={{ transform: interpolate([pos], ([x, y]) => `translate3d(${x}px,${y}px,0)`) }}
//       />
//     ))
//   }

// export default function Deck() {
//     const [{ pos, angle }, set] = useSpring(() => ({ pos: [0, 0], angle: 0, config: config.wobbly }))
  
//     const bind = useDrag(
//       ({ xy, previous, down, movement: pos, velocity, direction }) => {
//         set({ pos, immediate: down, config: { velocity: scale(direction, velocity), decay: true } })
//         if (dist(xy, previous) > 10 || !down) set({ angle: Math.atan2(direction[0], -direction[1]) })
//       },
//       { initial: () => pos.getValue() }
//     )
//     return (
//       <animated.div
//       className="Rocket"
//         {...bind()}
//         style={{ transform: interpolate([pos, angle], ([x, y], a) => `translate3d(${x}px,${y}px,0) rotate(${a}rad)`) }}
//       />
//     )
//   }

// export default function Deck() {
//     const [{ pos }, setPos] = useSpring(() => ({ pos: [0, 0] }))
  
//     const bind = useDrag(
//       ({ down, movement: banana }) => {
//         setPos({ pos: banana, immediate: down })
//       },
//       { initial: () => pos.getValue() }
//     )
//     return (
//       <animated.div
//       className="Rocket"
//         {...bind()}
//         style={{ transform: interpolate([pos], ([x, y]) => `translate3d(${x}px,${y}px,0)`) }}
//       />
//     )
//   }

// export default function Deck() {
//     const [{ xy }, set] = useSpring(() => ({ xy: [0, 0] }))

//     // Set the drag hook and define component movement based on gesture data
//     const bind = useDrag(({ down, movement }) => {
//       set({ xy: down ? movement : [0, 0] })
//     })
  
//     // Bind it to a component
//     return (
//       <animated.div
//         className="Rocket"
//         {...bind()}
//         style={{
//           transform: xy.interpolate((x, y) => `translate3d(${x}px, ${y}px, 0)`),
//         }}
//       />
//     )
//   }
