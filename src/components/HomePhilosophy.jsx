import React from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { GiAtom, GiHighKick, GiChart } from 'react-icons/gi'

const variants = {
  hidden: {
    opacity: 0,
    scale: 0.5,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      staggerChildren: 0.4,
      duration: 0.5,
    },
  },
}

export default function HomePhilosophy() {
  const [ref, inView, entry] = useInView({ threshold: 0.1 })
  const animation = useAnimation()

  React.useEffect(() => {
    if (inView) {
      animation.start('visible')
    } else {
      animation.start('hidden')
    }
  }, [animation, inView])

  return (
    <>
      <div className={`wave theme-bg philosophy`}>
        <motion.div className="container">
          <h2>A Unique Approach</h2>
          <p>
            The Saddle Mountain Group is a consulting organization that
            specializes in the world of complex and high-tech solutions. SMG
            offers a unique framework for sales excellence, built on 3
            cornerstones, all of which are critical for effective growth and
            sales results.
          </p>
          <motion.ul
            ref={ref}
            variants={variants}
            initial={'hidden'}
            animate={animation}
          >
            <motion.li variants={variants}>
              <GiAtom style={{ fill: 'url(#gradient)' }} />
              <p>Core Value Message</p>
            </motion.li>
            <motion.li variants={variants}>
              <GiHighKick style={{ fill: 'url(#gradient)' }} />
              <p>World Class Team</p>
            </motion.li>
            <motion.li variants={variants}>
              <GiChart style={{ fill: 'url(#gradient)' }} />
              <p>Metrics and KPIs</p>
            </motion.li>
          </motion.ul>
        </motion.div>
      </div>
      <svg>
        <clipPath id="wave" clipPathUnits="objectBoundingBox">
          <path
            className="st0"
            d="M1,0c0,0-0.3,0.1-0.5,0.1S0.3,0,0,0.1V1h1L1,0z"
          />
        </clipPath>
      </svg>
      <svg width="0" height="0">
        <linearGradient id="gradient" x1="100%" y1="100%" x2="0%" y2="0%">
          <stop stopColor="rgb(218, 163, 98)" offset="0%" />
          <stop stopColor="rgb(231, 138, 92)" offset="33%" />
          <stop stopColor="rgb(243, 110, 86)" offset="66%" />
          <stop stopColor="rgb(252, 72, 81)" offset="100%" />
        </linearGradient>
      </svg>
    </>
  )
}
