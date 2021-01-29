import React from 'react'
import { motion, useAnimation, useViewportScroll } from 'framer-motion'
import Img from 'gatsby-image'
import { useInView } from 'react-intersection-observer'
import { GiAtom, GiHighKick, GiChart } from 'react-icons/gi'
import {
  BsPeopleCircle,
  BsPieChart,
  BsShieldShaded,
  BsCheckCircle,
} from 'react-icons/bs'
import { FaChartPie } from 'react-icons/fa'
import useBoop from '../../hooks/useboop'
import { useSpring, animated } from 'react-spring'
import { StaticQuery, graphql } from 'gatsby'
import { AiOutlineRight } from 'react-icons/ai'
import {
  FcCollaboration,
  FcConferenceCall,
  FcProcess,
  FcGenealogy,
  FcComboChart,
  FcAlphabeticalSortingZa,
  FcBiotech,
  FcAdvance,
} from 'react-icons/fc'

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

export default function Assessment() {
  return (
    <StaticQuery
      query={graphql`
        query HomeAssessmentQuery {
          cosmicjsSettings(slug: { eq: "general" }) {
            metadata {
              assessment_image {
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
        const [ref, inView, entry] = useInView({ threshold: 0.1 })
        const [selected, setSelected] = React.useState(0)
        const [stickyNav, setStickyNav] = React.useState(false)
        const stickyRef = React.useRef(null)
        const animation = useAnimation()
        const { scrollY } = useViewportScroll()
        const AssessmentImage =
          data.cosmicjsSettings.metadata.assessment_image.local.childImageSharp
            .fluid
        return (
          <div className={`theme-bg`} style={{ position: 'relative' }}>
            <svg viewBox="0 0 200 200" height="0">
              <defs>
                <clipPath id="pic">
                  <motion.path
                    transform="translate(550 300) scale(3.6)"
                    fill="#fff"
                    d="M44.6,-47C58.3,-41.6,70.4,-28.1,76.6,-10.9C82.8,6.4,83.2,27.3,74.9,44.7C66.6,62.1,49.6,76,31.4,79.8C13.2,83.6,-6.3,77.3,-20,67.1C-33.8,56.9,-41.7,42.8,-50.1,28.7C-58.4,14.7,-67.1,0.6,-67.6,-14.5C-68,-29.7,-60.1,-46,-47.5,-51.6C-34.8,-57.2,-17.4,-52.1,-1,-51C15.4,-49.8,30.8,-52.4,44.6,-47Z"
                  />
                </clipPath>
                <clipPath id="pic1">
                  <motion.path
                    style={{ height: '100%', width: '100%' }}
                    transform="translate(100 100) scale(.1)"
                    fill="#fff"
                    d="M24.9,-39.2C30.6,-30.2,32.2,-20.6,37.1,-10.8C42,-1,50.2,9,50.2,18.6C50.3,28.2,42.1,37.5,32.4,39.7C22.6,41.8,11.3,36.9,-1.4,38.8C-14.1,40.8,-28.2,49.5,-39.9,48C-51.6,46.5,-60.8,34.6,-66.5,20.7C-72.1,6.9,-74.3,-9,-67.2,-19C-60,-29.1,-43.6,-33.3,-30.9,-40C-18.2,-46.7,-9.1,-55.8,0.3,-56.2C9.7,-56.6,19.3,-48.2,24.9,-39.2Z"
                    animate={{
                      d: [
                        'M24.9,-39.2C30.6,-30.2,32.2,-20.6,37.1,-10.8C42,-1,50.2,9,50.2,18.6C50.3,28.2,42.1,37.5,32.4,39.7C22.6,41.8,11.3,36.9,-1.4,38.8C-14.1,40.8,-28.2,49.5,-39.9,48C-51.6,46.5,-60.8,34.6,-66.5,20.7C-72.1,6.9,-74.3,-9,-67.2,-19C-60,-29.1,-43.6,-33.3,-30.9,-40C-18.2,-46.7,-9.1,-55.8,0.3,-56.2C9.7,-56.6,19.3,-48.2,24.9,-39.2Z',
                        'M25.8,-36.7C37.5,-27.1,53.6,-24.9,59,-17.1C64.4,-9.3,59.1,4.1,51,12.7C42.9,21.3,31.9,25.1,22.9,36.2C14,47.3,7,65.7,-5.1,72.7C-17.2,79.7,-34.4,75.4,-49.4,66.2C-64.5,57.1,-77.4,43.2,-75.1,29.3C-72.9,15.4,-55.6,1.5,-43.1,-6.8C-30.5,-15.2,-22.7,-17.9,-16.3,-29.1C-10,-40.4,-5,-60.3,1.1,-61.8C7.1,-63.2,14.2,-46.3,25.8,-36.7Z',
                        'M53.3,-62C69.1,-61.8,81.9,-46.3,76.5,-32.1C71.1,-17.9,47.5,-5.1,38.5,9.4C29.5,23.9,35.2,40.1,31.2,50.2C27.3,60.2,13.6,64.1,0,64.1C-13.6,64.1,-27.3,60.2,-34.4,51.2C-41.5,42.2,-42.2,28,-47.9,14.6C-53.7,1.1,-64.5,-11.7,-63.8,-22.9C-63.2,-34.2,-51.1,-43.9,-38.5,-45.1C-26,-46.3,-13,-39,2.9,-43C18.7,-46.9,37.5,-62.1,53.3,-62Z',
                        'M30,-44.7C42.5,-32.1,58.7,-28.3,64.5,-19C70.3,-9.7,65.5,5,62.2,21.8C58.9,38.5,57.1,57.3,47,64.5C36.8,71.7,18.4,67.3,6.5,58.4C-5.5,49.5,-11,36.1,-25.1,30.2C-39.3,24.3,-62.1,25.9,-70.1,18.7C-78,11.4,-71.2,-4.7,-60.2,-13.7C-49.2,-22.6,-34.1,-24.4,-23.4,-37.5C-12.7,-50.6,-6.3,-75.1,1.2,-76.7C8.7,-78.4,17.5,-57.2,30,-44.7Z',
                        'M38.3,-46.1C51.9,-42.9,66.7,-34.7,74.3,-21.7C81.9,-8.7,82.2,9.1,72,18.1C61.8,27.2,41,27.5,27.2,35.3C13.5,43.1,6.7,58.4,-0.7,59.4C-8.2,60.4,-16.3,47,-28.7,38.8C-41.2,30.5,-57.9,27.4,-62.5,19C-67.1,10.5,-59.5,-3.2,-56.3,-19.9C-53.1,-36.7,-54.2,-56.5,-45.6,-61.4C-36.9,-66.2,-18.5,-56.2,-3.1,-52C12.4,-47.8,24.7,-49.4,38.3,-46.1Z',
                        'M24.9,-39.2C30.6,-30.2,32.2,-20.6,37.1,-10.8C42,-1,50.2,9,50.2,18.6C50.3,28.2,42.1,37.5,32.4,39.7C22.6,41.8,11.3,36.9,-1.4,38.8C-14.1,40.8,-28.2,49.5,-39.9,48C-51.6,46.5,-60.8,34.6,-66.5,20.7C-72.1,6.9,-74.3,-9,-67.2,-19C-60,-29.1,-43.6,-33.3,-30.9,-40C-18.2,-46.7,-9.1,-55.8,0.3,-56.2C9.7,-56.6,19.3,-48.2,24.9,-39.2Z',
                      ],
                      transition: {
                        repeat: Infinity,
                        duration: 8,
                        type: 'spring',
                      },
                    }}
                  />
                </clipPath>
              </defs>
            </svg>
            <svg
              id="shape"
              viewbox="0 0 200 200"
              style={{
                position: 'absolute',
                top: 260,
                left: '43%',
                width: '90%',
                height: 'auto',
                minHeight: 700,
              }}
            >
              <motion.path
                transform="translate(580 330) scale(3.8)"
                fill="url(#linear)"
                d="M53.1,-60.8C64.5,-53.7,66.4,-32.9,67,-14.1C67.5,4.7,66.8,21.4,59.9,35.7C53,49.9,39.8,61.6,25.8,63.7C11.7,65.7,-3.3,58.1,-18.1,51.8C-32.8,45.5,-47.3,40.6,-57.3,29.9C-67.4,19.1,-73,2.6,-69.1,-10.8C-65.1,-24.3,-51.5,-34.8,-38.4,-41.6C-25.3,-48.3,-12.7,-51.4,4.1,-56.3C20.9,-61.2,41.7,-67.9,53.1,-60.8Z"
                // animate={{
                //   d: [
                //     'M53.1,-60.8C64.5,-53.7,66.4,-32.9,67,-14.1C67.5,4.7,66.8,21.4,59.9,35.7C53,49.9,39.8,61.6,25.8,63.7C11.7,65.7,-3.3,58.1,-18.1,51.8C-32.8,45.5,-47.3,40.6,-57.3,29.9C-67.4,19.1,-73,2.6,-69.1,-10.8C-65.1,-24.3,-51.5,-34.8,-38.4,-41.6C-25.3,-48.3,-12.7,-51.4,4.1,-56.3C20.9,-61.2,41.7,-67.9,53.1,-60.8Z',
                //     'M34.2,-40.3C46.6,-30.4,60.5,-21.8,65.3,-9.3C70.2,3.1,65.9,19.4,57.2,31.6C48.4,43.9,35.2,52.1,20.7,57.9C6.1,63.7,-9.7,67,-25.8,64.1C-41.8,61.1,-58,52,-60.9,39C-63.7,26.1,-53.1,9.3,-47.2,-5.5C-41.2,-20.3,-39.9,-33.1,-32.8,-44C-25.7,-54.8,-12.9,-63.6,-1,-62.5C10.9,-61.3,21.8,-50.2,34.2,-40.3Z',
                //     'M44.6,-47C58.3,-41.6,70.4,-28.1,76.6,-10.9C82.8,6.4,83.2,27.3,74.9,44.7C66.6,62.1,49.6,76,31.4,79.8C13.2,83.6,-6.3,77.3,-20,67.1C-33.8,56.9,-41.7,42.8,-50.1,28.7C-58.4,14.7,-67.1,0.6,-67.6,-14.5C-68,-29.7,-60.1,-46,-47.5,-51.6C-34.8,-57.2,-17.4,-52.1,-1,-51C15.4,-49.8,30.8,-52.4,44.6,-47Z',
                //     'M53.1,-60.8C64.5,-53.7,66.4,-32.9,67,-14.1C67.5,4.7,66.8,21.4,59.9,35.7C53,49.9,39.8,61.6,25.8,63.7C11.7,65.7,-3.3,58.1,-18.1,51.8C-32.8,45.5,-47.3,40.6,-57.3,29.9C-67.4,19.1,-73,2.6,-69.1,-10.8C-65.1,-24.3,-51.5,-34.8,-38.4,-41.6C-25.3,-48.3,-12.7,-51.4,4.1,-56.3C20.9,-61.2,41.7,-67.9,53.1,-60.8Z',
                //   ],
                //   transition: {
                //     duration: 15,
                //     repeat: Infinity,
                //     type: 'ease-out',
                //   },
                // }}
              />
            </svg>
            <Img
              fluid={AssessmentImage}
              style={{
                clipPath: 'url(#pic)',
                position: 'absolute',
                top: 260,
                left: '45%',
                width: '90%',
                height: 'auto',
              }}
            />
            <div className={`philosophy container`} id="assessment">
              <motion.div className="assessment-container">
                <div>
                  <h1>Business Assessment</h1>
                  <p
                    style={{
                      margin: '10px 0 50px 0',
                    }}
                  >
                    We draw on 40 years of high-tech experience to provide a
                    comprehensive review of your firm’s readiness to achieve
                    next-level growth and success. We have deep expertise in all
                    aspects of Go-To-Market activities:
                  </p>
                </div>

                <div className="list-container">
                  <div className="aside">
                    <svg
                      viewbox="0 0 580 160"
                      style={{
                        position: 'absolute',
                        top: -90,
                        left: -120,
                        zIndex: -1,
                        height: 200,
                        borderRadius: 0,
                        width: 410,
                        clipPath: 'url(#pic1)',
                      }}
                    >
                      <rect width="410" height="200" fill="url(#linear)"></rect>
                    </svg>
                    <h5 className="">Solution Readiness</h5>
                    <ul>
                      <li>- Core Value Messaging </li>
                      <li>- Ideal Customer Profile</li>
                      <li>- Pricing/Packaging</li>
                    </ul>
                  </div>
                  <div className="aside">
                    <svg
                      viewbox="0 0 580 160"
                      style={{
                        position: 'absolute',
                        top: -90,
                        left: -120,
                        zIndex: -1,
                        height: 200,
                        borderRadius: 0,
                        width: 410,
                        clipPath: 'url(#pic1)',
                      }}
                    >
                      <rect width="410" height="200" fill="url(#linear)"></rect>
                    </svg>
                    <h5 className="">Marketing Strategy</h5>
                    <ul>
                      <li>- Brand Effectiveness</li>
                      <li>- TAM/SAM Identification</li>
                      <li>- Lead Generation</li>
                      <li>- Website</li>
                      <li>- Thought Leadership</li>
                      <li>- Content Quality</li>
                    </ul>
                  </div>
                  <div className="aside">
                    <svg
                      viewbox="0 0 580 160"
                      style={{
                        position: 'absolute',
                        top: -90,
                        left: -120,
                        zIndex: -1,
                        height: 200,
                        borderRadius: 0,
                        width: 410,
                        clipPath: 'url(#pic1)',
                      }}
                    >
                      <rect width="410" height="200" fill="url(#linear)"></rect>
                    </svg>
                    <h5 className="">Sales Performance</h5>
                    <ul>
                      <li>- Distribution Model</li>
                      <li>- Staff Evaluation</li>
                      <li>- Competitive Strategy</li>
                      <li>- Presentation Effectiveness</li>
                      <li>- CRM Utilization</li>
                      <li>- Forecasting</li>
                      <li>- Performance Measures/KPIs</li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        )
      }}
    />
  )
}
