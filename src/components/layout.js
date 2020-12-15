import React from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'gatsby'
import { StaticQuery, graphql } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import Image from 'gatsby-image'
import { motion, useMotionValue, animate, useAnimation } from 'framer-motion'
import { rhythm, scale } from '../utils/typography'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'
import 'typeface-lato'

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
                    fluid(quality: 90, maxWidth: 5000) {
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

        if (location.pathname === rootPath || location.pathname === postsPath) {
          header = (
            <BackgroundImage
              Tag="div"
              className="post-hero"
              fluid={homgePageHero}
              backgroundColor={`#007ACC`}
              style={{
                height: '100vh',
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <motion.h1
                style={{
                  ...scale(1.3),
                  textAlign: 'center',
                  color: '#fff',
                  left: 0,
                  right: 0,
                  top: rhythm(4),
                  marginTop: '0',
                  height: rhythm(2.5),
                  textTransform: 'uppercase',
                  fontFamily: 'Lato, sans-serif',
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                initial={{ opacity: 0 }}
                transition={{
                  ease: 'easeOut',
                  duration: 1,
                  staggerChildren: 0.5,
                }}
              >
                Saddle Mountain Group
                <br />{' '}
                <motion.small
                  style={{
                    fontSize: '.5em',
                    borderTop: '1px solid #fff',
                    paddingTop: 15,
                    paddingLeft: 40,
                    paddingRight: 40,
                  }}
                >
                  Coming Soon
                </motion.small>
              </motion.h1>
            </BackgroundImage>
          )
        } else {
          header = (
            <h3
              style={{
                fontFamily: 'Montserrat, sans-serif',
                marginTop: 0,
                marginBottom: rhythm(-1),
                marginLeft: 'auto',
                marginRight: 'auto',
                maxWidth: rhythm(24),
                paddingTop: `${rhythm(1.5)}`,
              }}
            >
              <Link
                style={{
                  boxShadow: 'none',
                  textDecoration: 'none',
                  color: 'inherit',
                }}
                to={'/'}
              >
                {siteTitle}
              </Link>
            </h3>
          )
        }
        return (
          <div>
            {header}
            <div
              style={{
                marginLeft: 'auto',
                marginRight: 'auto',
                maxWidth: rhythm(24),
                padding: 0,
              }}
            >
              {children}
            </div>
            <footer
              style={{
                textAlign: 'center',
                padding: 0,
              }}
            ></footer>
          </div>
        )
      }}
    />
  )
}
