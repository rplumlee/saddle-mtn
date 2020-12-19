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
import { rhythm, scale } from '../utils/typography'
import { useSpring, animated } from 'react-spring'
import { RiMoonClearFill } from 'react-icons/ri'

import useBoop from '../hooks/useboop'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'
import 'typeface-lato'

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
const l1variants = {
  dark: { stroke: 'transparent', x: 0, y: 0 },
  light: { stroke: '#212121', x: -6, y: -10, transition: { delay: 0.2 } },
}
const l2variants = {
  dark: { stroke: 'transparent', x: 0, y: 0 },
  light: { stroke: '#212121', x: 0, y: -12, transition: { delay: 0.4 } },
}
const l3variants = {
  dark: { stroke: 'transparent', x: 0, y: 0 },
  light: { stroke: '#212121', x: 6, y: -10, transition: { delay: 0.6 } },
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

        header = (
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
                    width="20"
                    className="darkToggle"
                    style={{ overflow: 'hidden' }}
                  >
                    <motion.circle
                      cx="10"
                      cy="10"
                      r="8"
                      transition={{ duration: 0.19, type: 'linear' }}
                      fill={colorMode === 'light' ? '#212121' : '#fff'}
                      variants={c1variants}
                      animate={colorMode === 'light' ? 'light' : 'dark'}
                    />
                    <motion.circle
                      cx="14"
                      cy="6"
                      r="8"
                      transition={{ duration: 0.19, type: 'linear' }}
                      fill={colorMode === 'light' ? '#fff' : '#212121'}
                      variants={c2variants}
                      animate={colorMode === 'light' ? 'light' : 'dark'}
                    />
                    <g stroke-width="2">
                      <motion.path
                        d="M 9 20 L 6 17"
                        variants={l1variants}
                        stroke={colorMode === 'light' ? '#212121' : '#fff'}
                        animate={colorMode === 'light' ? 'light' : 'dark'}
                      />
                      <motion.path
                        d="M 10 20 L 10 15"
                        variants={l2variants}
                        stroke={colorMode === 'light' ? '#212121' : '#fff'}
                        animate={colorMode === 'light' ? 'light' : 'dark'}
                      />
                      <motion.path
                        d="M 11 20 L 14 17"
                        variants={l3variants}
                        stroke={colorMode === 'light' ? '#212121' : '#fff'}
                        animate={colorMode === 'light' ? 'light' : 'dark'}
                      />
                    </g>
                  </motion.svg>
                </a>
              </li>
            </ul>
          </header>
        )

        return (
          <ThemeContext.Provider value={{ colorMode }}>
            {header}
            <div className={`theme-${colorMode}`}>{children}</div>
            <footer
              style={{
                textAlign: 'center',
                padding: 0,
              }}
            ></footer>
          </ThemeContext.Provider>
        )
      }}
    />
  )
}
