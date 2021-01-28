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
import {
  FcCollaboration,
  FcConferenceCall,
  FcProcess,
  FcGenealogy,
  FcComboChart,
  FcAlphabeticalSortingZa,
  FcBiotech,
} from 'react-icons/fc'
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
            <div className={``} id="wwd">
              <div className={'wwd'}>
                <motion.ul className="theme-bg" id="servicess">
                  <li className="theme-bg">
                    <FcAlphabeticalSortingZa fill="#fff" /> <h5>Assessment</h5>
                    <p>
                      We start by assessing your organization from the ground up
                      to get the lay of the land.
                    </p>
                  </li>
                  <li className="theme-bg">
                    <FcBiotech fill="#fff" /> <h5>Strategy</h5>{' '}
                    <p>
                      Build processes to align your messaging with your product
                      and penetrate markets effectively.
                    </p>
                  </li>
                  <li className="theme-bg">
                    <FcConferenceCall fill="#fff" />
                    <h5>Scalability</h5>{' '}
                    <p>
                      Make sure your orgs are scaling correctly by maintaining
                      effective process improvement.
                    </p>
                  </li>
                  <li className="theme-bg">
                    <FcComboChart fill="#fff" />
                    <h5>KPIs</h5>{' '}
                    <p>
                      Implement a framework for performance measurement and
                      data-driven decision making.
                    </p>
                  </li>
                </motion.ul>
              </div>
            </div>

            <BackgroundImage
              Tag="div"
              className="post-hero"
              fluid={homgePageHero}
              backgroundColor={`#007ACC`}
              style={{
                paddingBottom: 0,
                height: '350px',
                minHeight: 350,
                position: 'relative',
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column',
                maxHeight: 1000,
                backgroundPosition: '100% 45%',
              }}
            >
              <div className="home-hero-overlay"></div>
            </BackgroundImage>
          </>
        )
      }}
    />
  )
}
