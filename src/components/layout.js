import React from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'gatsby'
import { StaticQuery, graphql } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import Image from 'gatsby-image'
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
import Password from './Password'

import Header from './Header'
import MobileMenu from './MobileMenu'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'
import 'typeface-lato'

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
        const [colorMode, toggleColorMode] = useCycle('light', 'dark')
        const [allowed, setAllowed] = useLocalStorageState('SMG_DEV')
        const [openMobile, toggleOpenMobile] = useCycle(false, true)

        const siteTitle = data.cosmicjsSettings.metadata.site_heading
        const homgePageHero =
          data.cosmicjsSettings.metadata.homepage_hero.local.childImageSharp
            .fluid

        return (
          <ThemeContext.Provider value={{ colorMode }}>
            <div className={`theme-${colorMode}`}>
              <Header
                colorMode={colorMode}
                toggleColorMode={toggleColorMode}
                openMobile={openMobile}
                toggleOpenMobile={toggleOpenMobile}
              />

              {allowed === 'bingo!' ? (
                <>
                  <div className="site-body">{children}</div>
                  <footer
                    style={{
                      textAlign: 'center',
                      padding: 0,
                    }}
                  ></footer>
                </>
              ) : (
                <Password setAllowed={setAllowed} />
              )}

              <MobileMenu
                colorMode={colorMode}
                toggleColorMode={toggleColorMode}
                openMobile={openMobile}
              />
            </div>
          </ThemeContext.Provider>
        )
      }}
    />
  )
}
