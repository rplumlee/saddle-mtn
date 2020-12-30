import React from 'react'
import { motion, useAnimation, useTransform, useSpring } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { GiAtom, GiHighKick, GiChart } from 'react-icons/gi'
import { BsClipboardData } from 'react-icons/bs'
import { GrInstall } from 'react-icons/gr'
import { AiOutlineLineChart } from 'react-icons/ai'
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
  closed: (i) => ({
    opacity: 0,
    pathLength: 0,
    transition: {
      duration: 1,
      delay: 0.9 - i,
    },
  }),
}
export default function HomeTeam() {
  const [ref, inView, entry] = useInView({ threshold: 1 })
  const [ref1, inView1, entry1] = useInView({ threshold: 1 })
  const [ref2, inView2, entry2] = useInView({ threshold: 1 })

  const animation1 = useAnimation()

  React.useEffect(() => {
    if (inView) {
      animation1.start('open')
    }
  }, [animation1, inView])

  return (
    <div className={`message team`}>
      <motion.div className="">
        <h2>Building a World Class Team</h2>
        <p>
          Complex solution selling is an expensive endeavor, requiring a
          commitment of resources throughout the organization. Winning sales
          organizations not only bring in critical revenue, but they help create
          a sustainable customer base, ensuring a recurring revenue stream for
          future success.
        </p>
        <ol ref={ref}>
          <li>
            <div className="card theme-bg-secondary">
              <BsClipboardData className="theme-fill icon" />
              Assess & Prescribe
            </div>
            <div className="shape theme-bg-secondary"></div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              width="30"
              strokeWidth="2"
              className="arrow"
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
            <div className="card  theme-bg-secondary">
              <GrInstall className="theme-stroke icon" />
              Install Improved Process
            </div>
            <div className="shape theme-bg-secondary"></div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              width="30"
              strokeWidth="2"
              className="arrow"
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
            <div className="card theme-bg-secondary">
              <AiOutlineLineChart className="theme-stroke icon" />
              Measure Results
            </div>
            <div className="shape theme-bg-secondary"></div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              width="30"
              strokeWidth="2"
              className="arrow"
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
        </ol>
        <p>
          When a company is consistently winning in the marketplace, the success
          acts as a flywheel that increases positive momentum throughout the
          organization. Recruiting and retaining top talent becomes much easier.
          SMG provides a comprehensive assessment of your sales organization’s
          effectiveness in the marketplace. Our phased approach is as follows:
        </p>
      </motion.div>
    </div>
  )
}
