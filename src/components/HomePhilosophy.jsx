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

export default function HomePhilosophy() {
  const [ref, inView, entry] = useInView({ threshold: 0.1 })
  const [selected, setSelected] = React.useState(0)
  const [stickyNav, setStickyNav] = React.useState(false)
  const stickyRef = React.useRef(null)
  const classes = useStyles()
  const animation = useAnimation()
  const { scrollY } = useViewportScroll()

  const handleChange = (event, newValue) => {
    event.preventDefault()
    setSelected(newValue)
  }

  React.useEffect(() => {
    if (inView) {
      animation.start('visible')
    }
  }, [animation, inView])

  const onChange = React.useCallback(() => {
    const viewportOffset = stickyRef.current.getBoundingClientRect()
    const bodyOffset = document.body.getBoundingClientRect()
    if (scrollY.get() >= viewportOffset.top - bodyOffset.top) {
      setStickyNav(true)
    }
    if (scrollY.get() < viewportOffset.top - bodyOffset.top) {
      setStickyNav(false)
    }
  }, [selected])

  React.useEffect(() => {
    scrollY.onChange(onChange)
  }, [onChange])

  return (
    <div className={`theme-bg-secondary`}>
      <div className={`theme-bg-secondary philosophy`} id="philosophy">
        <motion.div style={{ position: 'relative' }}>
          <h2>What we do</h2>
          <p
            style={{
              margin: '20px auto 50px auto',
              textAlign: 'center',
            }}
          >
            We specialize in the world of complex and high-tech solutions,
            offering our own unique framework for sales excellence built on 3
            cornerstones:
          </p>
          <div className="slant2 theme-bg-tertiary"></div>
          <div className="slant theme-bg"></div>

          <div ref={stickyRef}>
            <div
              className={
                stickyNav ? `${classes.root} stickyN` : `${classes.root}`
              }
            >
              <Tabs
                centered
                value={selected}
                onChange={handleChange}
                aria-label="scrollable prevent tabs example"
                className={
                  stickyNav
                    ? `${classes.tabs} stickyNav theme-bg-secondary`
                    : `${classes.tabs}`
                }
              >
                <Tab
                  label="Core Value Message"
                  icon={
                    <BsShieldShaded style={{ fontSize: 33, lineHeight: 55 }} />
                  }
                  aria-label="phone"
                  className={`${classes.tab}`}
                />
                <Tab
                  label="World Class Team"
                  icon={
                    <BsPeopleCircle style={{ fontSize: 33, lineHeight: 55 }} />
                  }
                  aria-label="favorite"
                  className={`${classes.tab}`}
                />
                <Tab
                  label="Metrics & KPI's"
                  icon={<FaChartPie style={{ fontSize: 33, lineHeight: 55 }} />}
                  aria-label="person"
                  className={`${classes.tab}`}
                />
              </Tabs>

              <TabPanel value={selected} index={0} style={{ padding: 0 }}>
                <motion.div
                  initial={`hide`}
                  animate={selected == 0 ? 'show' : 'hide'}
                  variants={variants}
                >
                  <HomeMessage />
                </motion.div>
              </TabPanel>
              <TabPanel value={selected} index={1}>
                <motion.div
                  initial={`hide`}
                  animate={selected == 1 ? 'show' : 'hide'}
                  variants={variants}
                >
                  <HomeTeam />
                </motion.div>
              </TabPanel>
              <TabPanel value={selected} index={2}>
                <motion.div
                  initial={`hide`}
                  animate={selected == 2 ? 'show' : 'hide'}
                  variants={variants}
                >
                  <HomeMetrics />
                </motion.div>
              </TabPanel>
            </div>
          </div>
        </motion.div>
      </div>

      <svg width="0" height="0">
        <linearGradient id="gradient" x1="100%" y1="100%" x2="0%" y2="0%">
          <stop stopColor="rgb(218, 163, 98)" offset="0%" />
          <stop stopColor="rgb(231, 138, 92)" offset="33%" />
          <stop stopColor="rgb(243, 110, 86)" offset="66%" />
          <stop stopColor="rgb(252, 72, 81)" offset="100%" />
        </linearGradient>
      </svg>
    </div>
  )
}
