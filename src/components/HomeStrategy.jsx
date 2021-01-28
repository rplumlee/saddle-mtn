import React from 'react'
import { motion, useAnimation, useViewportScroll } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import HomeMessage from './HomeMessage'
import HomeMetrics from './HomeMetrics'
import HomeTeam from './HomeTeam'
import { GiAtom, GiHighKick, GiChart } from 'react-icons/gi'
import { BsPeopleCircle, BsPieChart, BsShieldShaded } from 'react-icons/bs'
import { FaChartPie } from 'react-icons/fa'
import useBoop from '../hooks/useboop'
import { useSpring, animated } from 'react-spring'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Paper from '@material-ui/core/Paper'
import Box from '@material-ui/core/Box'
import { makeStyles } from '@material-ui/core/styles'
import Fade from '@material-ui/core/Fade'
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

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: 'transparent',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative',
    maxWidth: '100%',
    paddingTop: 0,
  },
  tabs: {
    display: 'inline-flex',
    margin: '0px 0 30px 0',
    width: '100%',
    maxWidth: '100%',
  },
  tab: {
    fontWeight: '700',
    width: '33%',
  },
  box: {
    padding: 0,
  },
}))

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

export default function HomeStrategy() {
  const [ref, inView, entry] = useInView({ threshold: 0.1 })
  const [selected, setSelected] = React.useState(0)
  const [stickyNav, setStickyNav] = React.useState(false)
  const stickyRef = React.useRef(null)
  const classes = useStyles()
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
