import React from 'react'
import { motion, useAnimation, useTransform, useSpring } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { GiAtom, GiHighKick, GiChart } from 'react-icons/gi'
import Button from '@material-ui/core/Button'
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
      <div className="shape4 theme-bg"></div>
      <div className="shape5 theme-bg-tertiary"></div>
      <div className={`contact theme-bg`} id="contact">
        <h2>Get in touch</h2>
        <p>
          <Button
            href="mailto:info@saddlemountaingroup.com"
            color="primary"
            size="large"
            className="theme-text"
            style={{
              padding: '12px 30px',
              marginTop: 20,
              marginLeft: 20,
              fontWeight: 500,
              background: 'rgba(125,125,125,.1)',
              textTransform: 'none',
            }}
          >
            info@saddlemountaingroup.com
          </Button>
        </p>
      </div>
    </>
  )
}
