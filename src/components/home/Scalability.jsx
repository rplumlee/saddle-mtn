import React from 'react'
import { motion, useAnimation, useViewportScroll } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { GiAtom, GiHighKick, GiChart } from 'react-icons/gi'
import { BsPeopleCircle, BsPieChart, BsShieldShaded } from 'react-icons/bs'
import { FaChartPie } from 'react-icons/fa'
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

export default function Scalability() {
  const [ref, inView, entry] = useInView({ threshold: 0.1 })
  const [selected, setSelected] = React.useState(0)
  const [stickyNav, setStickyNav] = React.useState(false)
  const stickyRef = React.useRef(null)
  const animation = useAnimation()
  const { scrollY } = useViewportScroll()

  return (
    <div className={`theme-bg-secondary`}>
      <div className={`philosophy container`} id="scalability">
        <motion.div className="assessment-container">
          <div>
            <h2>
              <FcConferenceCall />
              Scalability & Process Improvement
            </h2>
            <p
              style={{
                margin: '20px 0 50px 0',
              }}
            >
              SMG helps transform strategy into measurable results through a
              focus on process improvement. Changing organizational processes
              can be difficult without the right playbook and coaching. SMG
              helps ensure success though the following services:
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
