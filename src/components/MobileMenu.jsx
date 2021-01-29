import React from 'react'
import { motion } from 'framer-motion'
import useBoop from '../hooks/useboop'
import DarkToggle from './DarkToggle'
import { useSpring, animated } from 'react-spring'
import AnchorLink from 'react-anchor-link-smooth-scroll'

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

function MobileMenu({
  colorMode,
  toggleColorMode,
  openMobile,
  toggleOpenMobile,
}) {
  React.useEffect(() => {
    if (openMobile === true) {
      document.body.style.position = 'fixed'
      document.body.style.top = `-${window.scrollY}px`
    } else {
      document.body.style.position = ''
      document.body.style.top = ''
    }
  }, [openMobile])

  let realClick = React.useRef(true)

  const handleClick = (e) => {
    const { target, nativeEvent } = e
    const clonedNativeEvent = new MouseEvent('click', nativeEvent)

    if (!realClick.current) {
      realClick.current = true
      return
    }

    e.preventDefault()
    e.stopPropagation()

    toggleOpenMobile()

    realClick.current = false
    target.dispatchEvent(clonedNativeEvent)
  }

  return (
    <motion.ul
      className="mobile-menu theme-bg"
      variants={mobileMenuVariants}
      initial={'hide'}
      animate={openMobile ? 'show' : 'hide'}
    >
      <li>
        <TextBoop>
          <a href="#assessment" className={'theme-text'} onClick={handleClick}>
            Assessment
          </a>
        </TextBoop>
      </li>
      <li>
        <TextBoop>
          <a href="#strategy" className={'theme-text'} onClick={handleClick}>
            Strategy
          </a>
        </TextBoop>
      </li>
      <li>
        <TextBoop>
          <a href="#scalability" className={'theme-text'} onClick={handleClick}>
            Scalability
          </a>
        </TextBoop>
      </li>
      <li>
        <TextBoop>
          <a href="#kpis" className={'theme-text'} onClick={handleClick}>
            KPI's
          </a>
        </TextBoop>
      </li>
      <li>
        <TextBoop>
          <a href="#leadership" className={'theme-text'} onClick={handleClick}>
            About
          </a>
        </TextBoop>
      </li>{' '}
      <li>
        <TextBoop>
          <a href="#contact" className={'theme-text'} onClick={handleClick}>
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
