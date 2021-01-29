import React from 'react'
import { motion, useAnimation, useViewportScroll } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { GiAtom, GiHighKick, GiChart } from 'react-icons/gi'
import { BsPeopleCircle, BsPieChart, BsShieldShaded } from 'react-icons/bs'
import { FaChartPie } from 'react-icons/fa'
import useBoop from '../../hooks/useboop'
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

export default function Assessment() {
  const [ref, inView, entry] = useInView({ threshold: 0.1 })
  const [selected, setSelected] = React.useState(0)
  const [stickyNav, setStickyNav] = React.useState(false)
  const stickyRef = React.useRef(null)
  const classes = useStyles()
  const animation = useAnimation()
  const { scrollY } = useViewportScroll()

  return (
    <div className={`theme-bg`}>
      <div className={`philosophy container`} id="assessment">
        <motion.div className="assessment-container">
          <div>
            <h2>
              <FcAlphabeticalSortingZa />
              Business Assessment
            </h2>
            <p
              style={{
                margin: '20px 0 50px 0',
              }}
            >
              We draw on 40 years of high-tech experience to provide a
              comprehensive review of your firm’s readiness to achieve
              next-level growth and success. We have deep expertise in all
              aspects of Go-To-Market activities:
            </p>
          </div>

          <div className="list-container">
            <div>
              <h5>Solution Readiness</h5>
              <ul>
                <li>
                  <FcAdvance /> Core Value Messaging{' '}
                </li>
                <li>
                  <FcAdvance /> Ideal Customer Profile
                </li>
                <li>
                  <FcAdvance /> Pricing/Packaging
                </li>
              </ul>
            </div>
            <div>
              <h5>Marketing Strategy</h5>
              <ul>
                <li>
                  <FcAdvance /> Brand Effectiveness
                </li>
                <li>
                  <FcAdvance /> TAM/SAM Identification
                </li>
                <li>
                  <FcAdvance /> Lead Generation
                </li>
                <li>
                  <FcAdvance /> Website
                </li>
                <li>
                  <FcAdvance /> Thought Leadership
                </li>
                <li>
                  <FcAdvance /> Content Quality
                </li>
              </ul>
            </div>
            <div>
              <h5>Sales Performance</h5>
              <ul>
                <li>
                  <FcAdvance /> Distribution Model
                </li>
                <li>
                  <FcAdvance /> Staff Evaluation
                </li>
                <li>
                  <FcAdvance /> Competitive Strategy
                </li>
                <li>
                  <FcAdvance /> Presentation Effectiveness
                </li>
                <li>
                  <FcAdvance /> CRM Utilization
                </li>
                <li>
                  <FcAdvance /> Forecasting
                </li>
                <li>
                  <FcAdvance /> Performance Measures/KPIs
                </li>
              </ul>
            </div>
            {/* <div className={`${classes.root}`}>
              <Tabs
                centered
                value={selected}
                onChange={handleChange}
                aria-label="scrollable prevent tabs example"
                className={`${classes.tabs} theme-bg-secondary`}
              >
                <Tab
                  label="Solution Readiness"
                  aria-label="phone"
                  className={`${classes.tab}`}
                />
                <Tab
                  label="Marketing Strategy"
                  aria-label="favorite"
                  className={`${classes.tab}`}
                />
                <Tab
                  label="Sales Performance"
                  aria-label="person"
                  className={`${classes.tab}`}
                />
              </Tabs>

              <TabPanel value={selected} index={0} style={{ padding: 0 }}>
                <motion.div
                  initial={`hide`}
                  animate={selected == 0 ? 'show' : 'hide'}
                  variants={variants}
                ></motion.div>
              </TabPanel>
              <TabPanel value={selected} index={1}>
                <motion.div
                  initial={`hide`}
                  animate={selected == 1 ? 'show' : 'hide'}
                  variants={variants}
                >
                  {' '}
                </motion.div>
              </TabPanel>
              <TabPanel value={selected} index={2}>
                <motion.div
                  initial={`hide`}
                  animate={selected == 2 ? 'show' : 'hide'}
                  variants={variants}
                >
                  {' '}
                </motion.div>
              </TabPanel>
            </div>*/}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
