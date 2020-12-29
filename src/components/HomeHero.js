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
                paddingBottom: 0,
                height: '75vh',
                minHeight: 500,
                position: 'relative',
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column',
                maxHeight: 1000,
                backgroundPosition: '0% 100%',
              }}
            ></BackgroundImage>
          </>
        )
      }}
    />
  )
}
