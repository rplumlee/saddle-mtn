import React from 'react'
import { motion, useAnimation, useViewportScroll } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import HomeMessage from './HomeMessage'
import HomeMetrics from './HomeMetrics'
import HomeTeam from './HomeTeam'
import { GiAtom, GiHighKick, GiChart } from 'react-icons/gi'
import { BsPeopleCircle, BsPieChart, BsShieldShaded } from 'react-icons/bs'
import { FaChartPie } from 'react-icons/fa'
import {
  FcCollaboration,
  FcProcess,
  FcGenealogy,
  FcPositiveDynamic,
  FcOpenedFolder,
} from 'react-icons/fc'
import { MdAssessment } from 'react-icons/md'
import useBoop from '../hooks/useboop'
import { useSpring, animated } from 'react-spring'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Paper from '@material-ui/core/Paper'
import Box from '@material-ui/core/Box'
import { makeStyles } from '@material-ui/core/styles'
import Fade from '@material-ui/core/Fade'

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

export default function HomeWWD() {
  const [ref, inView, entry] = useInView({ threshold: 0.1 })
  const classes = useStyles()
  const animation = useAnimation()

  React.useEffect(() => {
    if (inView) {
      animation.start('visible')
    }
  }, [animation, inView])

  return (
    <div className={`theme-bg`} id="wwd">
      <div className={'wwd'}>
        <motion.ul>
          <li className="theme-bg">
            <FcOpenedFolder fill="#fff" /> <h5>Assessment</h5>
            <p>We analyze your company across it's different organizations.</p>
          </li>
          <li className="theme-bg">
            <FcCollaboration fill="#fff" /> <h5>Strategy</h5>{' '}
            <p>We analyze your company across it's different organizations.</p>
          </li>
          <li className="theme-bg">
            <FcProcess fill="#fff" />
            <h5>Scalability/Process Improvement</h5>{' '}
            <p>We analyze your company across it's different organizations.</p>
          </li>
          <li className="theme-bg">
            <FcPositiveDynamic fill="#fff" />
            <h5>Performance Measurement/KPIs</h5>{' '}
            <p>We analyze your company across it's different organizations.</p>
          </li>
        </motion.ul>
      </div>
    </div>
  )
}
