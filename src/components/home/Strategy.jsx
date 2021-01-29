import React from 'react'
import { motion, useAnimation, useViewportScroll } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

import useBoop from '../../hooks/useboop'
import { useSpring, animated } from 'react-spring'

import {
  FcCollaboration,
  FcConferenceCall,
  FcProcess,
  FcGenealogy,
  FcComboChart,
  FcAlphabeticalSortingZa,
  FcBiotech,
  FcAdvance,
} from 'react-icons/fc'

const variants = {
  hide: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      delay: 0.2,
    },
  },
}
function TabPanel(props) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  )
}

export default function Strategy() {
  const [ref, inView, entry] = useInView({ threshold: 0.1 })
  const [selected, setSelected] = React.useState(0)
  const [stickyNav, setStickyNav] = React.useState(false)
  const stickyRef = React.useRef(null)
  const animation = useAnimation()
  const { scrollY } = useViewportScroll()

  return (
    <div className={`theme-bg`} id="strategy" style={{ paddingBottom: 100 }}>
      {/* <svg
        viewbox="0 0 1600 360"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: 1,
          width: '100%',
          height: '3px',
        }}
      >
        <rect width="1600" height="360" fill="url(#linear)"></rect>
      </svg> */}
      <div className={`strategy container`}>
        <motion.div className="assessment-container">
          <div>
            <h2>
              Strategy Development <FcBiotech />
            </h2>
            <p
              style={{
                margin: '20px 0 50px auto',
                width: 800,
                maxWidth: '100%',
              }}
            >
              Once areas of improvement have been identified, SMG acts as a
              trusted advisor and sounding board to help craft a more cohesive
              and scalable strategy for next-level growth. Building a
              sustainable strategy involves deep dialogue and collaboration
              between SMG and the client, always using data to inform direction.
              Strategic services include:
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
