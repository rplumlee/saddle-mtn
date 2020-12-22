import React from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'gatsby'
import { StaticQuery, graphql } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import Image from 'gatsby-image'
import { motion, useMotionValue, animate, useAnimation } from 'framer-motion'
import { rhythm, scale } from '../utils/typography'
import Button from '@material-ui/core/Button'
import ThemeContext from './layout'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'
import 'typeface-lato'

export default function HomeHero({ children, location }) {
  return (
    <StaticQuery
      query={graphql`
        query HomeHeroQuery {
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
        const variants = {
          hidden: {
            opacity: 0,
            y: 50,
          },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              staggerChildren: 2,
              duration: 1.5,
              delay: 0.7,
            },
          },
        }
        const siteTitle = data.cosmicjsSettings.metadata.site_heading
        const homgePageHero =
          data.cosmicjsSettings.metadata.homepage_hero.local.childImageSharp
            .fluid

        return (
          <>
            <BackgroundImage
              Tag="div"
              className="post-hero"
              fluid={homgePageHero}
              backgroundColor={`#007ACC`}
              style={{
                paddingBottom: 150,
                height: '69vh',
                position: 'relative',
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column',
                maxHeight: 1000,
                backgroundPosition: '0% 100%',
              }}
            >
              <div className="home-hero-overlay"></div>
              <motion.h1
                style={{
                  ...scale(1.1),
                  textAlign: 'center',
                  color: '#fff',
                  left: 0,
                  right: 0,
                  top: rhythm(4),
                  marginTop: '0',
                  height: rhythm(2.5),
                  textTransform: 'uppercase',
                  fontFamily: 'Montserrat, sans-serif',
                  fontWeight: '700',
                  opacity: 0,
                  width: '80%',
                  margin: '0 auto',
                  letterSpacing: '0.2rem',
                }}
                variants={variants}
                initial={'hidden'}
                animate={'visible'}
                transition={{
                  ease: 'easeOut',
                  duration: 1,
                  staggerChildren: 0.5,
                }}
              >
                Transform your business
                <motion.small
                  variants={variants}
                  style={{
                    fontSize: '.9rem',
                    display: 'block',
                    textTransform: 'none',
                    fontWeight: '500',
                    maxWidth: 700,
                    lineHeight: '1.25rem',
                    margin: '15px auto 0 auto',
                  }}
                >
                  Take your sales organization to the next level with 40 years
                  of industry leading, data driven knowledge.
                  <motion.div variants={variants}>
                    <Button
                      href="#"
                      variant="contained"
                      color="primary"
                      size="large"
                      style={{
                        padding: '12px 30px',
                        marginTop: 40,
                        fontFamily: 'Lato, sans-serif',
                        fontWeight: 500,
                        background:
                          'linear-gradient(to top left, rgb(218, 163, 98), rgb(231, 138, 92), rgb(243, 110, 86), rgb(252, 72, 81))',
                      }}
                    >
                      Learn More
                    </Button>
                  </motion.div>
                </motion.small>
              </motion.h1>
            </BackgroundImage>
          </>
        )
      }}
    />
  )
}
