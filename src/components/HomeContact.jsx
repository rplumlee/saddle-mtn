import React from 'react'
import { motion, useAnimation, useTransform, useSpring } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { GiAtom, GiHighKick, GiChart } from 'react-icons/gi'

const variants = {
  hidden: {
    opacity: 0,
    scale: 0.5,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      staggerChildren: 0.4,
      duration: 0.5,
    },
  },
}

const clip_path_variants = {
  open: {
    pathLength: 1,
    transition: {
      duration: 0.4,
    },
  },
  closed: {
    pathLength: 0,
  },
}
export default function HomeContact() {
  return (
    <>
      {' '}
      <div className="shape4 theme-bg-primary"></div>
      <div className="shape5 theme-bg-tertiary"></div>
      <div className={`contact theme-bg-secondary`} id="contact">
        <h2>Get in touch</h2>
        <p>
          Feel free to shoot us an email at{' '}
          <a href="mailto:info@saddlemountaingroup.com">
            info@saddlemountaingroup.com
          </a>
        </p>
      </div>
    </>
  )
}
