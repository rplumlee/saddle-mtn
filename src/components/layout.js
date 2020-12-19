import React from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'gatsby'
import { StaticQuery, graphql } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import Image from 'gatsby-image'
import Logo from './Logo'
import {
  motion,
  useMotionValue,
  animate,
  useAnimation,
  useCycle,
} from 'framer-motion'
import { useLocalStorageState } from '../hooks/useLocalStorage'
import { rhythm, scale } from '../utils/typography'
import { useSpring, animated } from 'react-spring'
import { RiMoonClearFill } from 'react-icons/ri'

import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles'

import useBoop from '../hooks/useboop'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'
import 'typeface-lato'

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}))

const Boop = ({ children, ...boopConfig }) => {
  const [style, trigger] = useBoop({ rotation: 10 })
  return (
    <animated.div onMouseEnter={trigger} style={style}>
      {children}
    </animated.div>
  )
}
const TextBoop = ({ children, ...boopConfig }) => {
  const [style, trigger] = useBoop({
    y: -2,
    springConfig: { tension: 500 },
  })
  return (
    <animated.div onMouseEnter={trigger} style={style}>
      {children}
    </animated.div>
  )
}

const c1variants = {
  dark: { fill: '#fff', scale: 1 },
  light: { fill: '#fff', scale: 0 },
}
const c2variants = {
  dark: { fill: '#212121', scale: 1, x: 0, y: 0 },
  light: { fill: '#212121', scale: [1, 1.1, 1, 1], x: -4, y: 12 },
}
const l4variants = {
  dark: { stroke: 'transparent', x: 0, y: 0 },
  light: { stroke: '#212121', x: -8, y: -2, transition: { delay: 0.2 } },
}
const l1variants = {
  dark: { stroke: 'transparent', x: 0, y: 0 },
  light: { stroke: '#212121', x: -5, y: -10, transition: { delay: 0.4 } },
}
const l2variants = {
  dark: { stroke: 'transparent', x: 0, y: 0 },
  light: { stroke: '#212121', x: 0, y: -11, transition: { delay: 0.6 } },
}
const l3variants = {
  dark: { stroke: 'transparent', x: 0, y: 0 },
  light: { stroke: '#212121', x: 5, y: -10, transition: { delay: 0.8 } },
}

const l5variants = {
  dark: { stroke: 'transparent', x: 0, y: 0 },
  light: { stroke: '#212121', x: 8, y: -2, transition: { delay: 1 } },
}

const mobileMenuVariants = {
  show: {
    zIndex: 500,
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.2,
    },
  },
  hide: {
    zIndex: -1,
    opacity: 0,
    y: 20,
    transition: {
      duration: 0.2,
    },
  },
}
export const ThemeContext = React.createContext()

export default function Layout({ children, location }) {
  return (
    <StaticQuery
      query={graphql`
        query LayoutQuery {
          cosmicjsSettings(slug: { eq: "general" }) {
            metadata {
              site_heading
              homepage_hero {
                local {
                  childImageSharp {
                    fluid(quality: 99, maxWidth: 5000) {
                      ...GatsbyImageSharpFluid_withWebp
                    }
                  }
                }
              }
            }
          }
        }
      `}
      render={(data) => {
        const siteTitle = data.cosmicjsSettings.metadata.site_heading
        const homgePageHero =
          data.cosmicjsSettings.metadata.homepage_hero.local.childImageSharp
            .fluid
        let header
        let rootPath = `/`
        let postsPath = `/posts`
        if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
          rootPath = __PATH_PREFIX__ + `/`
          postsPath = __PATH_PREFIX__ + `/posts`
        }
        const [colorMode, toggleColorMode] = useCycle('dark', 'light')
        const [allowed, setAllowed] = useLocalStorageState('SMG_DEV')
        const [openMobile, toggleOpenMobile] = useCycle(false, true)

        React.useEffect(() => {
          if (openMobile === true) {
            document.body.style.position = 'fixed'
            document.body.style.top = `-${window.scrollY}px`
          } else {
            document.body.style.position = ''
            document.body.style.top = ''
          }
        }, [openMobile])

        const checkPW = (e) => {
          if (e.target.value === 'bingo!') {
            setAllowed('bingo!')
          }
        }

        header = (
          <div className={`theme-${colorMode}`}>
            <header className={`theme-${colorMode}`}>
              <div className="header-logo theme-text">
                <Logo />
              </div>
              <ul className="header-menu">
                <li>
                  <TextBoop>
                    <a href="#" className="theme-text">
                      Philosophy
                    </a>
                  </TextBoop>
                </li>
                <li>
                  <TextBoop>
                    <a href="#" className="theme-text">
                      Services
                    </a>
                  </TextBoop>
                </li>
                <li>
                  <TextBoop>
                    <a href="#" className="theme-text">
                      Leadership
                    </a>
                  </TextBoop>
                </li>{' '}
                <li>
                  <TextBoop>
                    <a href="#" className="theme-text">
                      Contact
                    </a>
                  </TextBoop>
                </li>
                <li>
                  <a
                    href="#"
                    className={`theme-text header-icon`}
                    onClick={toggleColorMode}
                  >
                    <motion.svg
                      height="20"
                      width="29"
                      className="darkToggle"
                      style={{ overflow: 'hidden' }}
                    >
                      <motion.circle
                        cx="15"
                        cy="10"
                        r="8"
                        transition={{ duration: 0.19 }}
                        fill={colorMode === 'light' ? '#212121' : '#fff'}
                        variants={c1variants}
                        animate={colorMode === 'light' ? 'light' : 'dark'}
                      />
                      <motion.circle
                        cx="19"
                        cy="6"
                        r="8"
                        transition={{ duration: 0.19 }}
                        fill={colorMode === 'light' ? '#fff' : '#212121'}
                        variants={c2variants}
                        animate={colorMode === 'light' ? 'light' : 'dark'}
                      />
                      <g strokeWidth="2">
                        <motion.path
                          d="M 14 18 L 10 18"
                          variants={l4variants}
                          stroke={colorMode === 'light' ? '#212121' : '#fff'}
                          animate={colorMode === 'light' ? 'light' : 'dark'}
                        />
                        <motion.path
                          d="M 14 21 L 11 18"
                          variants={l1variants}
                          stroke={colorMode === 'light' ? '#212121' : '#fff'}
                          animate={colorMode === 'light' ? 'light' : 'dark'}
                        />
                        <motion.path
                          d="M 15 20 L 15 15"
                          variants={l2variants}
                          stroke={colorMode === 'light' ? '#212121' : '#fff'}
                          animate={colorMode === 'light' ? 'light' : 'dark'}
                        />
                        <motion.path
                          d="M 16 21 L 19 18"
                          variants={l3variants}
                          stroke={colorMode === 'light' ? '#212121' : '#fff'}
                          animate={colorMode === 'light' ? 'light' : 'dark'}
                        />
                        <motion.path
                          d="M 16 18 L 20 18"
                          variants={l5variants}
                          stroke={colorMode === 'light' ? '#212121' : '#fff'}
                          animate={colorMode === 'light' ? 'light' : 'dark'}
                        />
                      </g>
                    </motion.svg>
                  </a>
                </li>
              </ul>
            </header>
            <a href="#" onClick={() => toggleOpenMobile()} id="mobile-toggle">
              <svg
                viewBox="0 0 100 100"
                width="50"
                className={
                  openMobile
                    ? 'ham hamRotate ham1 active theme-stroke'
                    : 'ham hamRotate ham1 theme-stroke'
                }
              >
                <path
                  className="line top"
                  d="m 30,33 h 40 c 0,0 9.044436,-0.654587 9.044436,-8.508902 0,-7.854315 -8.024349,-11.958003 -14.89975,-10.85914 -6.875401,1.098863 -13.637059,4.171617 -13.637059,16.368042 v 40"
                />
                <path className="line middle" d="m 30,50 h 40" />
                <path
                  className="line bottom"
                  d="m 30,67 h 40 c 12.796276,0 15.357889,-11.717785 15.357889,-26.851538 0,-15.133752 -4.786586,-27.274118 -16.667516,-27.274118 -11.88093,0 -18.499247,6.994427 -18.435284,17.125656 l 0.252538,40"
                />
              </svg>
            </a>
          </div>
        )

        return (
          <ThemeContext.Provider value={{ colorMode }}>
            {header}
            <div className={`theme-${colorMode}`}>
              {allowed === 'bingo!' ? (
                <>
                  <div className={`theme-${colorMode}`}>{children}</div>
                  <footer
                    style={{
                      textAlign: 'center',
                      padding: 0,
                    }}
                  ></footer>
                </>
              ) : (
                <motion.div
                  className="theme-bg-secondary"
                  style={{
                    margin: '0px auto',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100vh',
                    position: 'fixed',
                    width: '100%',
                    paddingBottom: 200,
                  }}
                >
                  <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                  >
                    <h1
                      style={{
                        marginTop: 0,
                        fontFamily: 'Montserrat',
                        fontWeight: 700,
                      }}
                    >
                      Coming Soon
                    </h1>
                    <TextField
                      id="pass"
                      label="Password"
                      defaultValue=""
                      className="theme-text"
                      style={{ width: 400 }}
                      onChange={(e) => checkPW(e)}
                    />
                  </motion.div>
                </motion.div>
              )}

              <motion.ul
                className="mobile-menu theme-bg"
                variants={mobileMenuVariants}
                initial={'hide'}
                animate={openMobile ? 'show' : 'hide'}
              >
                <li>
                  <TextBoop>
                    <a href="#" className="theme-text">
                      Philosophy
                    </a>
                  </TextBoop>
                </li>
                <li>
                  <TextBoop>
                    <a href="#" className="theme-text">
                      Services
                    </a>
                  </TextBoop>
                </li>
                <li>
                  <TextBoop>
                    <a href="#" className="theme-text">
                      Leadership
                    </a>
                  </TextBoop>
                </li>{' '}
                <li>
                  <TextBoop>
                    <a href="#" className="theme-text">
                      Contact
                    </a>
                  </TextBoop>
                </li>
                <li style={{ transform: 'scale(1.4)' }}>
                  <a
                    href="#"
                    className={`theme-text header-icon`}
                    onClick={toggleColorMode}
                  >
                    <motion.svg
                      height="20"
                      width="29"
                      className="darkToggle"
                      style={{ overflow: 'hidden' }}
                    >
                      <motion.circle
                        cx="15"
                        cy="10"
                        r="8"
                        transition={{ duration: 0.19 }}
                        fill={colorMode === 'light' ? '#212121' : '#fff'}
                        variants={c1variants}
                        animate={colorMode === 'light' ? 'light' : 'dark'}
                      />
                      <motion.circle
                        cx="19"
                        cy="6"
                        r="8"
                        transition={{ duration: 0.19 }}
                        fill={colorMode === 'light' ? '#fff' : '#212121'}
                        variants={c2variants}
                        animate={colorMode === 'light' ? 'light' : 'dark'}
                      />
                      <g strokeWidth="2">
                        <motion.path
                          d="M 14 18 L 10 18"
                          variants={l4variants}
                          stroke={colorMode === 'light' ? '#212121' : '#fff'}
                          animate={colorMode === 'light' ? 'light' : 'dark'}
                        />
                        <motion.path
                          d="M 14 21 L 11 18"
                          variants={l1variants}
                          stroke={colorMode === 'light' ? '#212121' : '#fff'}
                          animate={colorMode === 'light' ? 'light' : 'dark'}
                        />
                        <motion.path
                          d="M 15 20 L 15 15"
                          variants={l2variants}
                          stroke={colorMode === 'light' ? '#212121' : '#fff'}
                          animate={colorMode === 'light' ? 'light' : 'dark'}
                        />
                        <motion.path
                          d="M 16 21 L 19 18"
                          variants={l3variants}
                          stroke={colorMode === 'light' ? '#212121' : '#fff'}
                          animate={colorMode === 'light' ? 'light' : 'dark'}
                        />
                        <motion.path
                          d="M 16 18 L 20 18"
                          variants={l5variants}
                          stroke={colorMode === 'light' ? '#212121' : '#fff'}
                          animate={colorMode === 'light' ? 'light' : 'dark'}
                        />
                      </g>
                    </motion.svg>
                  </a>
                </li>
              </motion.ul>
            </div>
          </ThemeContext.Provider>
        )
      }}
    />
  )
}
