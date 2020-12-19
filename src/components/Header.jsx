import React from 'react'
import { motion } from 'framer-motion'
import useBoop from '../hooks/useboop'
import DarkToggle from './DarkToggle'
import Logo from './Logo'
import LogoTest from './LogoTest'
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

function Header({ colorMode, toggleColorMode, openMobile, toggleOpenMobile }) {
  return (
    <div className={`theme-${colorMode}`}>
      <header className={`theme-${colorMode}`}>
        <div className="header-logo theme-text">
          <LogoTest />
        </div>
        <ul className="header-menu">
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
          <li>
            <DarkToggle
              colorMode={colorMode}
              toggleColorMode={toggleColorMode}
            />
          </li>
        </ul>
      </header>
      <a href="#" onClick={() => toggleOpenMobile()} id="mobile-toggle">
        <svg
          viewBox="0 0 100 100"
          width="50"
          className={
            openMobile
              ? 'ham hamRotate ham1 active theme-stroke'
              : 'ham hamRotate ham1 theme-stroke'
          }
        >
          <path
            className="line top"
            d="m 30,33 h 40 c 0,0 9.044436,-0.654587 9.044436,-8.508902 0,-7.854315 -8.024349,-11.958003 -14.89975,-10.85914 -6.875401,1.098863 -13.637059,4.171617 -13.637059,16.368042 v 40"
          />
          <path className="line middle" d="m 30,50 h 40" />
          <path
            className="line bottom"
            d="m 30,67 h 40 c 12.796276,0 15.357889,-11.717785 15.357889,-26.851538 0,-15.133752 -4.786586,-27.274118 -16.667516,-27.274118 -11.88093,0 -18.499247,6.994427 -18.435284,17.125656 l 0.252538,40"
          />
        </svg>
      </a>
    </div>
  )
}

export default Header
