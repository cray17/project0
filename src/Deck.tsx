import React, { useState } from 'react'
import { useSprings, animated, to as interpolate } from '@react-spring/web'
import { useGesture } from 'react-use-gesture'
import solarbi from './img/solarbi.svg'
import csm from './img/csm.svg'
import spectrum from './img/spectrum.svg'
import styles from './styles.module.css'

const cards = [
  spectrum,
  solarbi,
  csm,
]

// These two are just helpers, they curate spring data, values that are later being interpolated into css
const to = (i: number) => ({
  x: 0,
  y: i * -4,
  scale: 1,
  rot: -10 + Math.random() * 20,
  delay: i * 100,
})
const from = (_i: number) => ({ x: 0, rot: 0, scale: 1.5, y: -1000 })
// This is being used down there in the view, it interpolates rotation and scale into a css transform
const trans = (r: number, s: number) =>
  `perspective(1500px) rotateX(20deg) rotateY(${r / 10}deg) rotateZ(${r}deg) scale(${s})`

export default function Deck() {
  const [gone] = useState(() => new Set()) // The set flags all the cards that are flicked out
  const [props, api] = useSprings(cards.length, i => ({
    ...to(i),
    from: from(i),
  })) // Create a bunch of springs using the helpers above
  // Create a gesture, we're interested in down-state, delta (current-pos - click-pos), direction and velocity
  const bind = useGesture({
    onClick: ({ args: [index] }) => {
      api.start(i => {
        if (index !== i) return // We're only interested in changing spring-data for the current spring
        const isGone = gone.has(index)
        const x = (200 + window.innerWidth) // When a card is gone it flys out right
        const rot = 0.3 // How much the card tilts, flicking it harder makes it rotate faster
        const scale = 1 // Active cards lift up a bit
        gone.add(index) // Flag the card ready to fly out
        return {
          x,
          rot,
          scale,
          delay: undefined,
          config: { friction: 50, tension: 500 },
        }
      })
      if (gone.size === cards.length)
        setTimeout(() => {
          gone.clear()
          api.start(i => to(i))
        }, 600)
    }
  })
  
  // Now we're just mapping the animated values to our view, that's it. Btw, this component only renders once. :-)
  return (
    <>
      {props.map(({ x, y, rot, scale }, i) => (
        <animated.div className={styles.deck} key={i} style={{ x, y }}>
          {/* This is the card itself, we're binding our gesture to it (and inject its index so we know which is which) */}
          <animated.div
            {...bind(i)}
            style={{
              transform: interpolate([rot, scale], trans),
              backgroundImage: `url(${cards[i]})`,
            }}
          />
        </animated.div>
      ))}
    </>
  )
}

