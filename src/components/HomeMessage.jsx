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
  open: (i) => ({
    pathLength: [0, 1, 1, 1, 1],
    opacity: [0, 1, 1, 1, 0],
    transition: {
      duration: 4,
      delay: i,
      repeat: Infinity,
    },
  }),
  closed: {
    opacity: 0,
    pathLength: 0,
  },
}
export default function HomeMessage() {
  const [ref, inView, entry] = useInView({ threshold: 1 })

  const animation1 = useAnimation()

  React.useEffect(() => {
    if (inView) {
      animation1.start('open')
    }
  }, [animation1, inView])

  return (
    <div className={`message`}>
      <motion.div className="">
        <h2>Optimizing Core Value Messaging</h2>
        <p>
          You can’t arm &amp; aim your sales organization without having a clear
          and effective core value proposition that differentiates your solution
          from your competitors. Many organizations fail to create a
          comprehensive messaging framework to be used for internal and external
          communications. Without a strong, clear and concise value message,
          your sales team will struggle on the phone and in the field to win the
          business your company deserves.
        </p>
        <ol>
          <li>
            <div className="card theme-bg-secondary">
              Evaluate &amp; Assess Current Value Message
            </div>
            <div className="shape theme-bg-secondary"></div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              width="30"
              strokeWidth="2"
            >
              <motion.path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                stroke="url(#gradient)"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
                variants={clip_path_variants}
                initial={'closed'}
                animate={animation1}
                custom={0.3}
              />
            </svg>
          </li>
          <li>
            <div className="card theme-bg-secondary">
              Recraft &amp; Refine Value Messaging
            </div>
            <div className="shape theme-bg-secondary"></div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              width="30"
              strokeWidth="2"
            >
              <motion.path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                stroke="url(#gradient)"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
                variants={clip_path_variants}
                initial={'closed'}
                animate={animation1}
                custom={0.6}
              />
            </svg>
          </li>
          <li>
            <div className="card theme-bg-secondary">Deploy to Sales Org.</div>
            <div className="shape theme-bg-secondary"></div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              width="30"
              strokeWidth="2"
            >
              <motion.path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                stroke="url(#gradient)"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
                variants={clip_path_variants}
                initial={'closed'}
                animate={animation1}
                custom={0.9}
              />
            </svg>
          </li>
          <li>
            <div className="shape theme-bg-secondary"></div>
            <div className="card theme-bg-secondary">
              Measure &amp; Validate Effectiveness
            </div>
          </li>
        </ol>
        <p ref={ref}>
          Saddle Mountain Group will do a deep dive into your current value
          messaging and essentially act as a proxy for your target customer.
          We’ll “stress test” your current messaging strategy to make sure it
          holds up under competitive fire. In addition, SMG will ensure your
          core messaging can be conveyed to your sales organization through an
          effective toolset.
        </p>
      </motion.div>
    </div>
  )
}
