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
    y: 0,
    transition: {
      duration: 0.4,
      delay: 0.3,
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
      <motion.li
        transition={{ delay: 0.5 }}
        animate={
          openMobile
            ? { y: 0, opacity: 1, transition: { delay: 0.5 } }
            : { y: 15, opacity: 0, transition: { delay: 0, duration: 0.4 } }
        }
      >
        <TextBoop>
          <a href="#assessment" className={'theme-text'} onClick={handleClick}>
            Assessment
          </a>
        </TextBoop>
      </motion.li>
      <motion.li
        transition={{ delay: 0.5 }}
        animate={
          openMobile
            ? { y: 0, opacity: 1, transition: { delay: 0.6 } }
            : { y: 15, opacity: 0, transition: { delay: 0, duration: 0.4 } }
        }
      >
        <TextBoop>
          <a href="#strategy" className={'theme-text'} onClick={handleClick}>
            Strategy
          </a>
        </TextBoop>
      </motion.li>
      <motion.li
        transition={{ delay: 0.5 }}
        animate={
          openMobile
            ? { y: 0, opacity: 1, transition: { delay: 0.7 } }
            : { y: 15, opacity: 0, transition: { delay: 0, duration: 0.4 } }
        }
      >
        <TextBoop>
          <a href="#scalability" className={'theme-text'} onClick={handleClick}>
            Scalability
          </a>
        </TextBoop>
      </motion.li>
      <motion.li
        transition={{ delay: 0.5 }}
        animate={
          openMobile
            ? { y: 0, opacity: 1, transition: { delay: 0.8 } }
            : { y: 15, opacity: 0, transition: { delay: 0, duration: 0.4 } }
        }
      >
        <TextBoop>
          <a href="#kpis" className={'theme-text'} onClick={handleClick}>
            KPI's
          </a>
        </TextBoop>
      </motion.li>
      <motion.li
        transition={{ delay: 0.5 }}
        animate={
          openMobile
            ? { y: 0, opacity: 1, transition: { delay: 0.9 } }
            : { y: 15, opacity: 0, transition: { delay: 0, duration: 0.4 } }
        }
      >
        <TextBoop>
          <a href="#leadership" className={'theme-text'} onClick={handleClick}>
            About
          </a>
        </TextBoop>
      </motion.li>{' '}
      <motion.li
        transition={{ delay: 0.5 }}
        animate={
          openMobile
            ? { y: 0, opacity: 1, transition: { delay: 1 } }
            : { y: 15, opacity: 0, transition: { delay: 0, duration: 0.4 } }
        }
      >
        <TextBoop>
          <a href="#contact" className={'theme-text'} onClick={handleClick}>
            Contact
          </a>
        </TextBoop>
      </motion.li>
      <motion.li
        transition={{ delay: 0.5 }}
        animate={
          openMobile
            ? { y: 0, opacity: 1, transition: { delay: 1.1 } }
            : { y: 15, opacity: 0, transition: { delay: 0, duration: 0.4 } }
        }
        style={{ transform: 'scale(1.4)' }}
      >
        <DarkToggle colorMode={colorMode} toggleColorMode={toggleColorMode} />
      </motion.li>
    </motion.ul>
  )
}

export default MobileMenu
