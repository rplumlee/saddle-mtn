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
      delay: 0.4,
    },
  },
  closed: {
    pathLength: 0,
  },
}
export default function HomeMessage() {
  const [ref, inView, entry] = useInView({ threshold: 0.1 })
  const [ref1, inView1, entry1] = useInView({ threshold: 0.1 })
  const [ref2, inView2, entry2] = useInView({ threshold: 0.1 })

  const animation = useAnimation()
  const animation1 = useAnimation()
  const animation2 = useAnimation()

  React.useEffect(() => {
    if (inView) {
      animation.start('open')
    } else {
      animation.start('closed')
    }
  }, [animation, inView])

  React.useEffect(() => {
    if (inView1) {
      animation1.start('open')
    } else {
      animation1.start('closed')
    }
  }, [animation1, inView1])

  React.useEffect(() => {
    if (inView2) {
      animation2.start('open')
    } else {
      animation2.start('closed')
    }
  }, [animation2, inView2])

  return (
    <>
      <div className={`wave theme-bg-secondary message`}>
        <GiAtom
          className="icon-spin"
          style={{
            fill: 'url(#gradient)',
            fontSize: 280,
            position: 'absolute',
            left: -50,
            zIndex: -1,
            opacity: 0.3,
          }}
        />
        <motion.div className="container">
          <h2>
            <br />
            1. Optimizing your Core Value Message
          </h2>
          <p>
            You can’t arm &amp; aim your sales organization without having a
            clear and effective core value proposition that differentiates your
            solution from your competitors. Many organizations fail to create a
            comprehensive messaging framework to be used for internal and
            external communications. Without a strong, clear and concise value
            message, your sales team will struggle on the phone and in the field
            to win the business your company deserves.
          </p>
          <p>
            Saddle Mountain Group will do a deep dive into your current value
            messaging and essentially act as a proxy for your target customer.
            We’ll “stress test” your current messaging strategy to make sure it
            holds up under competitive fire. In addition, SMG will ensure your
            core messaging can be conveyed to your sales organization through an
            effective toolset.
          </p>
          <div>
            <ol>
              <li className="theme-bg">
                <span>1</span>Evaluate &amp; Assess Current Value Message
                <svg ref={ref} stroke-width="3">
                  <motion.path
                    d="M 00 20 C 70 120 70 0 0 110"
                    fill="none"
                    stroke="url(#gradient)"
                    variants={clip_path_variants}
                    initial={'closed'}
                    animate={animation}
                  />
                </svg>
              </li>
              <li className="theme-bg">
                <span>2</span>Recraft &amp; Refine Value Messaging
                <svg ref={ref1} stroke-width="3">
                  <motion.path
                    d="M 00 20 C 70 120 70 0 0 110"
                    fill="none"
                    stroke="url(#gradient)"
                    variants={clip_path_variants}
                    initial={'closed'}
                    animate={animation1}
                  />
                </svg>
              </li>
              <li className="theme-bg">
                <span>3</span>Deploy to Sales Org.
                <svg ref={ref2} stroke-width="3">
                  <motion.path
                    d="M 00 20 C 70 120 70 0 0 110"
                    fill="none"
                    stroke="url(#gradient)"
                    variants={clip_path_variants}
                    initial={'closed'}
                    animate={animation2}
                  />
                </svg>
              </li>
              <li className="theme-bg">
                <span>4</span>Measure &amp; Validate Effectiveness
              </li>
            </ol>
          </div>
        </motion.div>
      </div>
    </>
  )
}
