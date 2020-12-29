import React from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import HomeMessage from './HomeMessage'
import { GiAtom, GiHighKick, GiChart } from 'react-icons/gi'
import useBoop from '../hooks/useboop'
import { useSpring, animated } from 'react-spring'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Paper from '@material-ui/core/Paper'
import Box from '@material-ui/core/Box'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: 'transparent',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative',
  },
  tabs: {
    borderBottom: `1px solid rgba(122,122,122,.3)`,
    display: 'inline-flex',
    padding: '0px',
    minWidth: 800,
  },
  tab: {
    fontWeight: '700',
    width: '33%',
  },
}))
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
  const animation = useAnimation()
  const [selected, setSelected] = React.useState(0)
  const classes = useStyles()
  const handleChange = (event, newValue) => {
    setSelected(newValue)
  }

  React.useEffect(() => {
    if (inView) {
      animation.start('visible')
    }
  }, [animation, inView])

  return (
    <div className={`theme-bg-secondary`}>
      <div className={`theme-bg-secondary philosophy`}>
        <motion.div className="">
          <p
            style={{
              maxWidth: 600,
              margin: '80px auto',
              textAlign: 'center',
              fontWeight: '600',
            }}
          >
            We specialize in the world of complex and high-tech solutions,
            offering our own unique framework for sales excellence built on 3
            cornerstones:
          </p>

          <div>
            <div className={classes.root}>
              <Tabs
                centered
                value={selected}
                onChange={handleChange}
                aria-label="scrollable prevent tabs example"
                className={`${classes.tabs} `}
              >
                <Tab
                  label="Core Value Message"
                  icon={<GiAtom style={{ fontSize: 38 }} />}
                  aria-label="phone"
                  className={`${classes.tab}`}
                />
                <Tab
                  label="World Class Team"
                  icon={<GiHighKick style={{ fontSize: 38 }} />}
                  aria-label="favorite"
                  className={`${classes.tab}`}
                />
                <Tab
                  label="Metrics & KPIs"
                  icon={<GiChart style={{ fontSize: 38 }} />}
                  aria-label="person"
                  className={`${classes.tab}`}
                />
              </Tabs>

              <TabPanel value={selected} index={0}>
                <HomeMessage />
              </TabPanel>
              <TabPanel value={selected} index={1}>
                Item Two
              </TabPanel>
              <TabPanel value={selected} index={2}>
                Item Three
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
