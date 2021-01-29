import React from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'gatsby'
import { StaticQuery, graphql } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import Image from 'gatsby-image'
import { motion, useMotionValue, animate, useAnimation } from 'framer-motion'
import { BsArrowDown } from 'react-icons/bs'
import { rhythm, scale } from '../../utils/typography'
import Button from '@material-ui/core/Button'
import ThemeContext from '../layout'
import Particles from 'react-particles-js'
import { GiPerson } from 'react-icons/gi'
import AnchorLink from 'react-anchor-link-smooth-scroll'
// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'
import 'typeface-lato'
const waves = [
  'M0,160L30,149.3C60,139,120,117,180,128C240,139,300,181,360,176C420,171,480,117,540,106.7C600,96,660,128,720,154.7C780,181,840,203,900,197.3C960,192,1020,160,1080,138.7C1140,117,1200,107,1260,96C1320,85,1380,75,1410,69.3L1440,64L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z',
  'M0,160L30,181.3C60,203,120,245,180,261.3C240,277,300,267,360,234.7C420,203,480,149,540,149.3C600,149,660,203,720,224C780,245,840,235,900,224C960,213,1020,203,1080,165.3C1140,128,1200,64,1260,48C1320,32,1380,64,1410,80L1440,96L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z',
  'M0,256L30,261.3C60,267,120,277,180,277.3C240,277,300,267,360,250.7C420,235,480,213,540,218.7C600,224,660,256,720,245.3C780,235,840,181,900,154.7C960,128,1020,128,1080,149.3C1140,171,1200,213,1260,202.7C1320,192,1380,128,1410,96L1440,64L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z',
  'M0,224L30,234.7C60,245,120,267,180,256C240,245,300,203,360,176C420,149,480,139,540,138.7C600,139,660,149,720,165.3C780,181,840,203,900,176C960,149,1020,75,1080,69.3C1140,64,1200,128,1260,154.7C1320,181,1380,171,1410,165.3L1440,160L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z',
  'M0,224L30,218.7C60,213,120,203,180,213.3C240,224,300,256,360,229.3C420,203,480,117,540,106.7C600,96,660,160,720,186.7C780,213,840,203,900,218.7C960,235,1020,277,1080,250.7C1140,224,1200,128,1260,74.7C1320,21,1380,11,1410,5.3L1440,0L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z',
  'M0,192L30,197.3C60,203,120,213,180,224C240,235,300,245,360,234.7C420,224,480,192,540,202.7C600,213,660,267,720,277.3C780,288,840,256,900,240C960,224,1020,224,1080,208C1140,192,1200,160,1260,154.7C1320,149,1380,171,1410,181.3L1440,192L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z',
]
function getRandomInt(max, notAllowed) {
  return Math.floor(Math.random() * Math.floor(max))
}
const bg_variants = {
  start: {
    d:
      'M 0 0 L 0 500 Q 150 550 200 450 Q 300 200 450 350 C 600 400 600 100 800 250 L 800 0',
  },
  finish: {
    d:
      'M 0 0 L 0 500 Q 100 400 200 450 Q 400 600 550 450 C 650 300 600 100 800 150 L 800 0',
  },
}
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

const ids = [
  'marketPath',
  'exact',
  'cty',
  'eby',
  'fact',
  'ifttt',
  'pg',
  'find',
  'cnet',
  'bbye',
  'cow',
  'hack',
]

export default function HomeTop({ children, location }) {
  const [activePath, setActivePath] = React.useState('find')

  React.useEffect(() => {
    setInterval(() => {
      const randomItem = ids[Math.floor(Math.random() * ids.length)]

      setActivePath(randomItem)
    }, 3500)

    return clearInterval()
  }, [])

  return (
    <div className="theme-bg">
      {' '}
      <div
        className="bg"
        style={{
          position: 'absolute',
          zIndex: 6,
          top: 0,
          left: 0,
          width: '100%',
          transformOrigin: 'center center',
        }}
      >
        <svg viewBox="0 0 1440 520">
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop
                offset="0%"
                style={{ stopColor: 'purple', stopOpacity: 1 }}
              />
              <stop
                offset="100%"
                style={{ stopColor: '#a01aed', stopOpacity: 1 }}
              />
            </linearGradient>
            <linearGradient id="linear" x1="0%" y1="0%" x2="100%" y2="50%">
              <motion.stop
                stopColor="#04bd7f"
                animate={{
                  stopColor: ['#04bd7f', '#FF7744', '#4d3e96'],
                }}
                transition={{
                  yoyo: Infinity,
                  ease: 'linear',
                  duration: 8,
                }}
                offset="25%"
              />
              <motion.stop
                stopColor="#BF5FFF"
                animate={{
                  stopColor: ['#BF5FFF', '#FFC6A8', '#FF7744', '#5f41f2'],
                }}
                transition={{
                  yoyo: Infinity,
                  ease: 'linear',
                  duration: 8,
                }}
                offset="50%"
              />
              <motion.stop
                stopColor="#5f41f2"
                animate={{
                  stopColor: ['#5f41f2', '#BF5FFF'],
                }}
                transition={{
                  yoyo: Infinity,
                  ease: 'linear',
                  duration: 8,
                }}
                offset="75%"
              />
              <motion.stop
                stopColor="#D4504C"
                animate={{
                  stopColor: ['#D4504C', '#5f41f2', '#f7d319'],
                }}
                transition={{
                  yoyo: Infinity,
                  ease: 'linear',
                  duration: 8,
                }}
                offset="100%"
              />
            </linearGradient>
          </defs>
          {waves.map((wave, index) => {
            return (
              <motion.path
                d={`${wave}`}
                variants={bg_variants}
                initial={{ d: `${wave}` }}
                animate={{ d: `${waves[5 - index]}` }}
                fillOpacity="0.7"
                fill="url(#linear)"
                transition={{
                  repeat: Infinity,
                  repeatType: 'reverse',
                  duration: 3 + index,
                }}
                key={`${index}-wave`}
              />
            )
          })}
        </svg>
      </div>
      <div className="infographic-container">
        <h1
          style={{
            textAlign: 'center',
            margin: '0 auto',
            zIndex: 2,
            position: 'relative',
            maxWidth: 800,
          }}
        >
          Strategic Advisors to Emerging Tech Organizations
        </h1>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 50,
          }}
        >
          <AnchorLink href="#contact" offset="-100">
            <Button
              href="#"
              variant="contained"
              color="primary"
              size="large"
              className={''}
              style={{
                padding: '12px 30px',
                marginTop: 20,
                fontWeight: 500,
                boxShadow: 'none',
                background: 'rgba(0,0,0,.04)',
                overflow: 'hidden',
                fontWeight: 600,
                color: '#fff',
              }}
            >
              Get in touch
              <svg
                viewbox="0 0 580 160"
                style={{
                  position: 'absolute',
                  bottom: 0,
                  right: 0,
                  zIndex: -1,
                }}
              >
                <rect
                  width="580"
                  height="160"
                  fill="url(#linear)"
                  style={{ borderRadius: 5 }}
                ></rect>
              </svg>
            </Button>
          </AnchorLink>
          <AnchorLink href="#servicess" id="wwdButton">
            <Button
              href="#text-buttons"
              color="primary"
              size="large"
              className="theme-text flat-button"
              style={{
                padding: '12px 30px',
                marginTop: 20,
                marginLeft: 20,
                fontWeight: 600,
                background: 'rgba(125,125,125,0)',
              }}
            >
              What We Do <BsArrowDown />
            </Button>
          </AnchorLink>
        </div>
      </div>
    </div>
  )
}
