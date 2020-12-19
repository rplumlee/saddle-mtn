import React from 'react'
import { motion } from 'framer-motion'
import useBoop from '../hooks/useboop'
import DarkToggle from './DarkToggle'
import { useSpring, animated } from 'react-spring'

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
    y: 15,
    transition: {
      duration: 0.2,
    },
  },
}

function MobileMenu({ colorMode, toggleColorMode, openMobile }) {
  React.useEffect(() => {
    if (openMobile === true) {
      document.body.style.position = 'fixed'
      document.body.style.top = `-${window.scrollY}px`
    } else {
      document.body.style.position = ''
      document.body.style.top = ''
    }
  }, [openMobile])

  return (
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
        <DarkToggle colorMode={colorMode} toggleColorMode={toggleColorMode} />
      </li>
    </motion.ul>
  )
}

export default MobileMenu
