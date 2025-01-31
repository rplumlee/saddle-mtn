import React from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'gatsby'
import { StaticQuery, graphql } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import Image from 'gatsby-image'
import { motion, useMotionValue, animate, useAnimation } from 'framer-motion'
import { rhythm, scale } from '../../utils/typography'
import Button from '@material-ui/core/Button'
import ThemeContext from '../layout'
import { BsArrowRight } from 'react-icons/bs'
import {
  FcCollaboration,
  FcConferenceCall,
  FcProcess,
  FcGenealogy,
  FcComboChart,
  FcAlphabeticalSortingZa,
  FcBiotech,
} from 'react-icons/fc'

import { BiMapPin } from 'react-icons/bi'
// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'
import 'typeface-lato'

export default function Services({ children, location }) {
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

        const width = useMotionValue(0)

        return (
          <>
            <div className={``} id="wwd">
              <div className={'wwd'}>
                <motion.ul className="" id="servicess">
                  <svg
                    viewbox="0 0 1600 560"
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: '-5%',
                      zIndex: 0,
                      width: '110%',
                      height: '100%',
                    }}
                  >
                    <rect
                      width="1600"
                      height="560"
                      fill="url(#linear)"
                      style={{ borderRadius: 5 }}
                    ></rect>
                  </svg>
                  <li className="theme-bg hover">
                    <div>
                      <h5>
                        Assessment <BsArrowRight fill="#fff" />
                      </h5>
                    </div>
                    <p>We go over your company with a fine toothed comb.</p>
                  </li>
                  <li className="theme-bg hover">
                    <div>
                      <h5>
                        Strategy
                        <BsArrowRight fill="#fff" />
                      </h5>
                    </div>
                    <p>Align your messaging and penetrate markets.</p>
                  </li>
                  <li className="theme-bg hover">
                    <div>
                      <h5>
                        Scalability
                        <BsArrowRight fill="#fff" />
                      </h5>
                    </div>
                    <p>Implement mechanisms for continuous improvement.</p>
                  </li>
                  <li className="theme-bg hover">
                    <div>
                      <h5>
                        KPIs
                        <BsArrowRight fill="#fff" />
                      </h5>
                    </div>
                    <p>Put in a framework for making data-driven decisions.</p>
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
                height: '300px',
                minHeight: 300,
                position: 'relative',
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column',
                maxHeight: 1000,
                backgroundPosition: '70% 50%',
              }}
            >
              <div className="home-hero-overlay"></div>
              <motion.a
                className="mtn-marker"
                onHoverStart={() => width.set(180)}
                onHoverEnd={() => width.set(0)}
                style={{ cursor: 'pointer' }}
                href="https://en.wikipedia.org/wiki/Saddle_Mountain_State_Natural_Area"
                target="_blank"
                alt="Saddle Mountain State Natural Area"
              >
                {' '}
                <svg
                  viewbox="0 0 580 160"
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    right: 0,
                    zIndex: -1,
                    opacity: 0.8,
                  }}
                >
                  <rect
                    width="580"
                    height="160"
                    fill="url(#linear)"
                    style={{ borderRadius: 5 }}
                  ></rect>
                </svg>
                <BiMapPin />
                <motion.p style={{ width, overflow: 'hidden', height: 30 }}>
                  &nbsp;&nbsp;&nbsp;&nbsp;Saddle Mountain, OR
                </motion.p>
              </motion.a>
            </BackgroundImage>
          </>
        )
      }}
    />
  )
}
