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
export default function HomeMetrics() {
  const [ref, inView, entry] = useInView({ threshold: 1 })
  const [ref1, inView1, entry1] = useInView({ threshold: 1 })
  const [ref2, inView2, entry2] = useInView({ threshold: 1 })

  const animation = useAnimation()
  const animation1 = useAnimation()
  const animation2 = useAnimation()

  React.useEffect(() => {
    if (inView) {
      animation.start('open')
    }
  }, [animation, inView])

  React.useEffect(() => {
    if (inView1) {
      animation1.start('open')
    }
  }, [animation1, inView1])

  React.useEffect(() => {
    if (inView2) {
      animation2.start('open')
    }
  }, [animation2, inView2])

  return (
    <div className={`message`}>
      <GiAtom
        className="icon-spin"
        style={{
          fill: 'url(#gradient)',
          fontSize: 280,
          position: 'absolute',
          right: -50,
          zIndex: 1,
          opacity: 0.3,
        }}
      />
      <motion.div className="">
        <h2>Metrics and KPI's</h2>
        <p>
          You can’t arm &amp; aim your sales organization without having a clear
          and effective core value proposition that differentiates your solution
          from your competitors. Many organizations fail to create a
          comprehensive messaging framework to be used for internal and external
          communications. Without a strong, clear and concise value message,
          your sales team will struggle on the phone and in the field to win the
          business your company deserves.
        </p>
        <p>
          Saddle Mountain Group will do a deep dive into your current value
          messaging and essentially act as a proxy for your target customer.
          We’ll “stress test” your current messaging strategy to make sure it
          holds up under competitive fire. In addition, SMG will ensure your
          core messaging can be conveyed to your sales organization through an
          effective toolset.
        </p>

        <div className="messaging-layout">
          <ol>
            <li>
              <div className="card theme-bg">
                <span>1</span>Evaluate &amp; Assess Current Value Message
              </div>
              <div className="shape theme-bg-tertiary"></div>
              <svg ref={ref} strokeWidth="3">
                <motion.path
                  d="M 0 40 C 80 130 60 10 0 100 L 10 100 L 0 90 L 0 100"
                  fill="none"
                  stroke="url(#gradient)"
                  variants={clip_path_variants}
                  initial={'closed'}
                  animate={animation}
                />
              </svg>
            </li>
            <li>
              <div className="card theme-bg">
                <span>2</span>Recraft &amp; Refine Value Messaging
              </div>
              <div className="shape theme-bg-tertiary"></div>
              <svg ref={ref1} strokeWidth="3">
                <motion.path
                  d="M 0 40 C 80 130 60 10 0 100 L 10 100 L 0 90 L 0 100"
                  fill="none"
                  stroke="url(#gradient)"
                  variants={clip_path_variants}
                  initial={'closed'}
                  animate={animation1}
                />
              </svg>
            </li>
            <li>
              <div className="card theme-bg">
                <span>3</span>Deploy to Sales Org.
              </div>
              <div className="shape theme-bg-tertiary"></div>
              <svg ref={ref2} strokeWidth="3">
                <motion.path
                  d="M 0 40 C 80 130 60 10 0 100 L 10 100 L 0 90 L 0 100"
                  fill="none"
                  stroke="url(#gradient)"
                  variants={clip_path_variants}
                  initial={'closed'}
                  animate={animation2}
                />
              </svg>
            </li>
            <li>
              <div className="shape theme-bg-tertiary"></div>
              <div className="card theme-bg">
                <span>4</span>Measure &amp; Validate Effectiveness
              </div>
            </li>
          </ol>
          <div>
            <h3>
              Saddle Mountain Group – value messaging questions we will explore
              with you:
            </h3>
            <ul>
              <li>
                Is your value messaging aligned with your solution’s core
                benefits?
              </li>
              <li>
                Is your value messaging clear, compelling and clearly
                differentiated from the competition?
              </li>
              <li>
                Does your sales organization have the tools and training to
                effectively convey the message?
              </li>
              <li>
                Do you have any validation mechanisms in place to ensure your
                message is effective in winning new customers?
              </li>
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
