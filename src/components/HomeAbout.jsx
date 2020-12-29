import React from 'react'
import { motion, useAnimation, useTransform, useSpring } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { GiPerson, GiPeople, GiChart } from 'react-icons/gi'

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

const ids = [
  'marketPath',
  'exact',
  'cty',
  'eby',
  'fact',
  'ifttt',
  'pg',
  'find',
  'cnet',
  'bbye',
  'cow',
  'hack',
]
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
export default function HomeAbout() {
  const [activePath, setActivePath] = React.useState('find')

  React.useEffect(() => {
    setInterval(() => {
      const randomItem = ids[Math.floor(Math.random() * ids.length)]

      setActivePath(randomItem)
    }, 3500)

    return clearInterval()
  }, [])

  return (
    <div style={{ position: 'relative' }}>
      <div className="shape3 theme-bg-tertiary"></div>
      <div className="shape2 theme-bg"></div>

      <div className="home-about theme-bg-secondary" id="leadership">
        <div
          className="infographic-container theme-text"
          style={{ clipPath: 'none' }}
        >
          <div className="container" style={{}}>
            <h2>Leadership</h2>
            <p>
              Saddle Mountain Group is led by Maury Plumlee, founder and
              principal partner. Maury started his career in sales with
              Portland-based Viewpoint in 1980, and his sales management
              responsibilities grew as the company expanded into a global leader
              in construction ERP solutions. During this time-period, Viewpoint
              grew from less than 20 employees to over 800 today.{' '}
            </p>
            <p>
              Maury’s skills and expertise were honed by the competitive world
              of front-line ERP sales; this gave him the foundation to help
              build and lead the Viewpoint Sales Organization through
              substantial growth and success. In 2015, after a 30+ year career
              in all aspects of sales, Maury moved to VP of Global Marketing,
              where he led branding, messaging &amp; lead generation activities
              across Viewpoint’s global organization. Viewpoint was acquired by
              Trimble Corporation in 2018.
            </p>
          </div>
          <div
            className="theme-text home-infographic"
            style={{ height: '150%' }}
          >
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              viewBox="0 0 1952 1080"
              enableBackground="new 0 0 1952 1080"
            >
              <g
                id="Layer_3"
                className={
                  activePath !== '' ? `${activePath} focus` : 'activePath'
                }
              >
                {/* <text
              className="static"
              transform="matrix(1 0 0 1 108.0852 86.1745)"
              fontSize="24"
            >
              SALES TEAM
            </text>
            <text
              className="static"
              transform="matrix(1 0 0 1 451.3861 86.1745)"
              fontSize="24"
            >
              CORE VALUE MESSAGE
            </text>
            <text
              className="static"
              transform="matrix(1 0 0 1 1143.9843 86.1746)"
              fontSize="24"
            >
              SALES CHANNELS
            </text>
            <text
              className="static"
              transform="matrix(1 0 0 1 1615.3583 86.1743)"
              fontSize="24"
            >
              CUSTOMERS
            </text>
            <line
              className="static"
              fill="#000"
              stroke="#000000"
              strokeMiterlimit="10"
              x1="142.2"
              y1="113.9"
              x2="142.2"
              y2="415.2"
            />
            <line
              className="static"
              fill="#000"
              stroke="#000000"
              strokeMiterlimit="10"
              x1="569.7"
              y1="113.9"
              x2="569.7"
              y2="346.2"
            />
            <line
              className="static"
              fill="#000"
              stroke="#000000"
              strokeMiterlimit="10"
              x1="1245"
              y1="113.9"
              x2="1245"
              y2="201.3"
            />
            <line
              className="static"
              fill="#000"
              stroke="#000000"
              strokeMiterlimit="10"
              x1="1684.4"
              y1="113.9"
              x2="1684.4"
              y2="344.8"
            /> */}

                <rect
                  className="fact hack"
                  x="186"
                  y="415.4"
                  opacity="0.75"
                  fill="#3E6B93"
                  width="27.5"
                  height="66.4"
                />
                <rect
                  className="marketPath exact cty eby ifttt pg find cnet bbye cow hack"
                  x="186.1"
                  y="487.1"
                  opacity="0.75"
                  fill="#3C96D2"
                  width="27.5"
                  height="66.4"
                />
                <rect
                  className="hack"
                  x="186.3"
                  y="558.8"
                  opacity="0.75"
                  fill="#086D9A"
                  width="27.3"
                  height="66.4"
                />
                <rect
                  className="marketPath exact cty eby ifttt pg find cnet bbye cow hack"
                  x="186.3"
                  y="630.6"
                  opacity="0.75"
                  fill="#21366B"
                  width="27.2"
                  height="66.4"
                />
                <rect
                  className="marketPath exact cty eby ifttt pg find cnet bbye cow hack"
                  x="186.3"
                  y="702.3"
                  opacity="0.75"
                  fill="#2470A9"
                  width="27.3"
                  height="66.4"
                />
                <rect
                  className="marketPath exact cty eby ifttt pg find cnet bbye cow hack"
                  x="186.3"
                  y="774.3"
                  opacity="0.75"
                  fill="#2DC4EE"
                  width="27.3"
                  height="66.4"
                />

                <path
                  className="cow hack"
                  opacity="0.5"
                  fill="#3C96D2"
                  d="M213.5,503.7c77.2,0.1,169,58.1,209.9,56.5v66.4c-36.8-22.8-135.4-98.9-209.9-106.3V503.7z"
                />
                <path
                  className="ifttt hack"
                  opacity="0.5"
                  fill="#3C96D2"
                  d="M213.5,520.3c71.1,12.9,178.1,93.8,209.9,111.6v66.4c-36.2-34.5-135.8-143.6-209.9-161.5V520.3z"
                />
                <path
                  className="cty hack"
                  opacity="0.5"
                  fill="#3C96D2"
                  d="M213.5,537c78.6,22.5,143.9,142,209.9,166.7v66.4c-20.3,6-115.7-182.2-209.9-216.6V537z"
                />
                <path
                  className="fact hack"
                  opacity="0.35"
                  fill="#3E6B93"
                  d="M213.5,415.4c29.9-3.2,149.7,3.6,209.9,1.3v66.4c-1.3,1.4-154.7-6.2-209.9-1.3V415.4z"
                />
                <path
                  className="marketPath exact cty eby ifttt pg find cnet bbye cow hack"
                  opacity="0.5"
                  fill="#2DC4EE"
                  d="M213.5,774.3c43.4-8,146.9-366.8,209.9-379.5v16.5c-52.8,9.8-150.4,364.8-209.9,396.2V774.3z"
                />
                <path
                  className="marketPath ifttt bbye hack"
                  opacity="0.5"
                  fill="#2DC4EE"
                  d="M213.5,807.5c56.9-6.9,145.9-307.2,209.9-319.1v66.4c-57.1-18.6-138.7,274.1-209.9,285.8V807.5z"
                />
                <path
                  className="marketPath exact cty eby ifttt pg find cnet bbye cow hack"
                  opacity="0.5"
                  fill="#2470A9"
                  d="M213.5,702.2c38.4-10.4,149.9-317.9,209.9-324v16.5c-53.4-2.2-163.7,325-209.9,340.7V702.2z"
                />
                <path
                  className="cow hack"
                  opacity="0.5"
                  fill="#2470A9"
                  d="M213.5,735.5c69.4,10.1,167.7,68.6,209.9,73.1v33.2c-48.9-9.2-143.9-74.8-209.9-73.1V735.5z"
                />
                <path
                  className="marketPath exact cty eby ifttt pg find cnet bbye cow hack"
                  opacity="0.5"
                  fill="#21366B"
                  d="M213.5,630.6c38-2.5,134.2-253.2,209.9-268.8v16.5c-55.5,1.4-169.5,275.2-209.9,285.5V630.6z"
                />
                <path
                  className="cow hack"
                  opacity="0.5"
                  fill="#21366B"
                  d="M213.5,663.8c77.3,6.6,156.5,103.1,209.9,111.6v33.2c-48.5-13.9-140.6-109.9-209.9-111.7V663.8z"
                />
                <path
                  className="hack"
                  opacity="0.5"
                  fill="#086D9A"
                  d="M213.5,558.8c63.7,11,113.2,236.3,209.9,288.4v66.4c-98.1-54.4-125.3-283.3-209.9-288.4V558.8z"
                />
                <path
                  className="marketPath exact cty eby ifttt pg find cnet bbye cow hack"
                  opacity="0.5"
                  fill="#3C96D2"
                  d="M213.5,487.1c50.9-7.7,151.6-135.4,209.9-141.8v16.5c-50.2,6.5-156.3,134.3-209.9,141.9V487.1z"
                />

                <polygon
                  className="fact hack"
                  opacity="0.75"
                  fill="#3E6B93"
                  points="450.7,416.7 423.4,416.7 423.4,483.1 450.7,483.1 456.4,449.9"
                />
                <polygon
                  className="marketPath ifttt bbye hack"
                  opacity="0.75"
                  fill="#2DC4EE"
                  points="450.7,488.4 423.4,488.4 423.4,554.8 450.7,554.8 456.4,521.6"
                />
                <polygon
                  className="cow hack"
                  opacity="0.75"
                  fill="#3C96D2"
                  points="450.7,560.2 423.4,560.2 423.4,626.6 450.7,626.6 456.4,593.4"
                />
                <polygon
                  className="ifttt hack"
                  opacity="0.75"
                  fill="#3C96D2"
                  points="450.7,631.9 423.4,631.9 423.4,698.3 450.7,698.3 456.4,665.1"
                />
                <polygon
                  className="cty hack"
                  opacity="0.75"
                  fill="#3C96D2"
                  points="450.7,703.7 423.4,703.7 423.4,770.1 450.7,770.1 456.4,736.9"
                />
                <polygon
                  className="hack"
                  opacity="0.75"
                  fill="#086D9A"
                  points="450.7,847.2 423.4,847.2 423.4,913.5 450.7,913.5 456.4,880.4"
                />
                <polygon
                  className="cow hack"
                  opacity="0.75"
                  fill="#2470A9"
                  points="456.4,808.7 450.7,808.7 423.4,808.7 423.4,841.8 450.7,841.8 450.7,841.9"
                />
                <polygon
                  className="cow hack"
                  opacity="0.75"
                  fill="#21366B"
                  points="456.4,808.7 450.7,775.5 450.7,775.4 423.4,775.4 423.4,808.6 450.7,808.6 450.7,808.7"
                />
                <polygon
                  className="marketPath exact cty eby ifttt pg find cnet bbye cow hack"
                  opacity="0.75"
                  fill="#2DC4EE"
                  points="453.6,394.8 450.7,394.8 423.4,394.8 423.4,411.3 450.7,411.3 450.7,411.5"
                />
                <polygon
                  className="marketPath exact cty eby ifttt pg find cnet bbye cow hack"
                  opacity="0.75"
                  fill="#2470A9"
                  points="456.4,378.3 450.8,378.3 450.7,378.3 423.4,378.3 423.4,394.8 450.8,394.8 450.8,394.8 453.6,394.8"
                />
                <polygon
                  className="marketPath exact cty eby ifttt pg find cnet bbye cow hack"
                  opacity="0.75"
                  fill="#21366B"
                  points="453.6,361.8 451.5,361.8 450.7,361.8 423.4,361.8 423.4,378.3 450.7,378.3 451.5,378.3 456.4,378.3"
                />
                <polygon
                  className="marketPath exact cty eby ifttt pg find cnet bbye cow hack"
                  opacity="0.75"
                  fill="#3C96D2"
                  points="450.7,345.3 423.4,345.3 423.4,361.8 450.7,361.8 451.1,361.8 453.6,361.8"
                />

                <rect
                  className="marketPath exact cty eby ifttt pg find cnet bbye cow hack"
                  x="691.3"
                  y="345"
                  opacity="0.75"
                  fill="#B6B734"
                  width="27.3"
                  height="66.4"
                />
                <rect
                  className="fact hack"
                  x="691.3"
                  y="416.7"
                  opacity="0.75"
                  fill="#756629"
                  width="27.3"
                  height="66.4"
                />
                <rect
                  className="marketPath ifttt bbye hack"
                  x="691.3"
                  y="488.4"
                  opacity="0.75"
                  fill="#F9E420"
                  width="27.3"
                  height="66.4"
                />
                <rect
                  className="cow hack"
                  x="691.3"
                  y="560.2"
                  opacity="0.8"
                  fill="#EFCA2E"
                  width="27.3"
                  height="66.4"
                />
                <rect
                  className="ifttt hack"
                  x="691.3"
                  y="631.9"
                  opacity="0.75"
                  fill="#DDA527"
                  width="27.3"
                  height="66.4"
                />
                <rect
                  className="cty hack"
                  x="691.3"
                  y="703.7"
                  opacity="0.75"
                  fill="#B3D334"
                  width="27.3"
                  height="66.4"
                />
                <rect
                  className="cow hack"
                  x="691.3"
                  y="775.4"
                  opacity="0.75"
                  fill="#FED402"
                  width="27.3"
                  height="66.4"
                />
                <rect
                  className="hack"
                  x="691.3"
                  y="847.2"
                  opacity="0.75"
                  fill="#918C34"
                  width="27.3"
                  height="66.4"
                />

                <path
                  className="bbye"
                  opacity="0.5"
                  fill="#F9E420"
                  d="M718.7,521.6c92.4,9.6,345,367.9,396.9,357.3v33.2c-50.3-6.1-315.8-366.4-396.9-373.9V521.6z"
                />
                <path
                  className="marketPath"
                  opacity="0.5"
                  fill="#F9E420"
                  d="M718.7,488.4c46,10.1,351-256.1,396.9-255.2v33.2C1080.7,263.3,774.9,512,718.7,505V488.4z"
                />
                <path
                  className="fact"
                  opacity="0.35"
                  fill="#756629"
                  d="M718.7,416.7c30.8,0.2,363.1,72.3,396.9,70.5v65.9c-37.9-7.5-362.7-106.1-396.9-103.3V416.7z"
                />
                <path
                  className="cty"
                  opacity="0.5"
                  fill="#B3D334"
                  d="M718.7,703.7c117.6,18.6,324.1-330.6,396.9-327v33.1c-42.3-5.8-258.6,337.6-396.9,327V703.7z"
                />
                <path
                  className="hack"
                  opacity="0.35"
                  fill="#756629"
                  d="M718.7,449.9c94,10.2,252,481.6,396.9,547.7v8.3c-145.8-37.7-307.8-507.1-396.9-522.8V449.9z"
                />
                <path
                  className="ifttt"
                  opacity="0.5"
                  fill="#DDA527"
                  d="M718.7,631.9c77,1,350.1-27.5,396.9-29.1v21.9c-20,3.3-349.4,35.8-396.9,40.3V631.9z"
                />
                <path
                  className="hack"
                  opacity="0.6"
                  fill="#EFCA2E"
                  d="M718.7,593.4c65.8-0.9,162.2,373.2,396.9,420.8v8.3c-240.2-37.6-309.2-395.3-396.9-395.9V593.4z"
                />
                <path
                  className="hack"
                  opacity="0.5"
                  fill="#DDA527"
                  d="M718.7,665.1c76.6,12.6,197.5,348.7,396.9,357.3v8.3c-213.3-7.9-295.1-308.9-396.9-332.4V665.1z"
                />
                <path
                  className="hack"
                  opacity="0.5"
                  fill="#B3D334"
                  d="M718.7,736.9c71.8,2.6,196.6,291.9,396.9,293.9v8.3c-195.4-5.9-317.6-257.1-396.9-269V736.9z"
                />
                <path
                  className="hack"
                  opacity="0.5"
                  fill="#FED402"
                  d="M718.7,808.5c102.4,8.9,140.7,225,396.9,230.6v8.3c-248.1-6.8-326.1-203-396.9-205.5V808.5z"
                />
                <path
                  className="hack"
                  opacity="0.5"
                  fill="#918C34"
                  d="M718.7,847.2c43.5,0.8,164.7,199.4,396.9,200.2v8.3c-270.8-15-289.1-136-396.9-142.1V847.2z"
                />
                <path
                  className="exact"
                  opacity="0.5"
                  fill="#B6B734"
                  d="M718.7,351c47.6,2.3,319.4-69.9,396.9-79.2v66.4c-72.1-8.4-369,18.4-396.9,18.9V351z"
                />
                <path
                  className="marketPath"
                  opacity="0.5"
                  fill="#B6B734"
                  d="M718.7,345c33.9-1.7,354.3-145.4,396.9-144.9v33.2C1067.8,234,744.4,350.4,718.7,351V345z"
                />
                <path
                  className="cty"
                  opacity="0.5"
                  fill="#B6B734"
                  d="M718.7,357c31.2,0.9,338.7-19.8,396.9-13.5v33.2c-39.9-7-342.6-7.7-396.9-13.6V357z"
                />
                <path
                  className="eby"
                  opacity="0.5"
                  fill="#B6B734"
                  d="M718.7,363.1c104.9,17.2,340,41.1,396.9,52.2v66.4c-44-17.8-301.5-101.4-396.9-112.5V363.1z"
                />
                <path
                  className="ifttt"
                  opacity="0.5"
                  fill="#B6B734"
                  d="M718.7,369.1c134.7,25.3,348.5,189.4,396.9,189.9v22.1c-45.3-2-301.6-207.7-396.9-205.9V369.1z"
                />
                <path
                  className="pg"
                  opacity="0.5"
                  fill="#B6B734"
                  d="M718.7,375.1c115.2,13.4,338.2,241.4,396.9,255.4v66.4c-36.2,0-287.7-302.1-396.9-315.7V375.1z"
                />
                <path
                  className="find"
                  opacity="0.5"
                  fill="#B6B734"
                  d="M718.7,381.1c112.5,30.2,344.6,324.2,396.9,321.1v66.4c-63.9-9.8-294.3-357.4-396.9-381.4V381.1z"
                />
                <path
                  className="cnet"
                  opacity="0.5"
                  fill="#B6B734"
                  d="M718.7,387.2c105.6,38.1,322.1,378.3,396.9,386.8v66.4c-61.1-11.5-298.6-408.9-396.9-447.1V387.2z"
                />
                <path
                  className="bbye"
                  opacity="0.5"
                  fill="#B6B734"
                  d="M718.7,393.2c100.9,55.7,328.1,447.6,396.9,452.5v33.2c-75.6-18.5-305.5-425.5-396.9-479.7V393.2z"
                />
                <path
                  className="hack"
                  opacity="0.5"
                  fill="#B6B734"
                  d="M718.7,405.3c107,78,276.7,488.4,396.9,584v8.3C988.6,911.9,780,443.4,718.7,411.3V405.3z"
                />
                <path
                  className="ifttt"
                  opacity="0.5"
                  fill="#F9E420"
                  d="M718.7,505c31.9,3.5,372.2,74.3,396.9,76V603c-15.4-0.2-378.5-81.7-396.9-81.3V505z"
                />
                <path
                  className="hack"
                  opacity="0.5"
                  fill="#F9E420"
                  d="M718.7,538.2c128.8,39.1,213.2,424.1,396.9,467.6v8.3c-219.2-60.6-286.8-452.1-396.9-459.3V538.2z"
                />
                <path
                  className="cow"
                  opacity="0.5"
                  fill="#FED402"
                  d="M718.7,775.4c63.5,4.6,354.9,184.2,396.9,186.3v22.1c-31.5,1-342.1-174.3-396.9-175.4V775.4z"
                />
                <path
                  className="cow"
                  opacity="0.6"
                  fill="#EFCA2E"
                  d="M718.7,560.2c80.4,9.2,303.7,362.7,396.9,379.4v22.1c-88.5-33.2-324.2-366.3-396.9-368.3V560.2z"
                />
                <path
                  className="cow"
                  opacity="0.5"
                  fill="#B6B734"
                  d="M718.7,399.2c130.2,99.9,335.3,514.3,396.9,518.2v22.1c-90.2-19.6-303.4-479.7-396.9-534.3V399.2z"
                />

                <path
                  className="marketPath exact cty eby ifttt pg find cnet bbye cow hack theme-fill"
                  fill="#000"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={0}
                  transform="matrix(1 0 0 1 543.0305 333.7551) scale(2.7, 4.05)  "
                  stroke="#333"
                  d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"
                />
                <path
                  className="fact hack theme-fill"
                  fill="#000"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={0}
                  transform="matrix(1 0 0 1 543.0305 405.5002) scale(2.7, 4.05)  "
                  stroke="#333"
                  d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"
                />

                <path
                  className="marketPath ifttt bbye hack theme-fill"
                  fill="#000"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={0}
                  transform="matrix(1 0 0 1 543.0305 477.2454) scale(2.7, 4.05)  "
                  stroke="#333"
                  d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"
                />

                <path
                  className="cow hack theme-fill"
                  fill="#000"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={0}
                  transform="matrix(1 0 0 1 543.0305 548.9895) scale(2.7, 4.05)  "
                  stroke="#333"
                  d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"
                />
                <path
                  className="ifttt  hack theme-fill"
                  fill="#000"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={0}
                  transform="matrix(1 0 0 1 543.0305 620.7346) scale(2.7, 4.05)  "
                  stroke="#333"
                  d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"
                />
                <path
                  className="cty hack theme-fill"
                  fill="#000"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={0}
                  transform="matrix(1 0 0 1 543.0305 692.4778) scale(2.7, 4.05)  "
                  stroke="#333"
                  d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"
                />
                <path
                  className="cow hack theme-fill"
                  fill="#000"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={0}
                  transform="matrix(1 0 0 1 543.0305 764.2219) scale(2.7, 4.05)  "
                  stroke="#333"
                  d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"
                />
                <path
                  className="hack theme-fill"
                  fill="#000"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={0}
                  transform="matrix(1 0 0 1 543.0305 835.967) scale(2.7, 4.05)  "
                  stroke="#333"
                  d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"
                />

                <polygon
                  className="exact"
                  opacity="0.75"
                  fill="#B6B734"
                  points="1148.6,304.9 1142.9,271.8 1115.5,271.8 1115.5,338.1 1142.9,338.1 1142.9,338.1"
                />
                <polygon
                  className="eby"
                  opacity="0.75"
                  fill="#B6B734"
                  points="1142.9,415.2 1115.5,415.2 1115.5,481.6 1142.9,481.6 1148.6,448.4"
                />
                <polygon
                  className="fact"
                  opacity="0.75"
                  fill="#756629"
                  points="1142.9,487 1115.5,487 1115.5,553.4 1142.9,553.4 1148.6,520.2"
                />
                <polygon
                  className="pg"
                  opacity="0.75"
                  fill="#B6B734"
                  points="1142.9,630.5 1115.5,630.5 1115.5,696.9 1142.9,696.9 1148.6,663.7"
                />
                <polygon
                  className="find"
                  opacity="0.75"
                  fill="#B6B734"
                  points="1142.9,702.2 1115.5,702.2 1115.5,768.6 1142.9,768.6 1148.6,735.4"
                />
                <polygon
                  className="cnet"
                  opacity="0.75"
                  fill="#B6B734"
                  points="1142.9,774 1115.5,774 1115.5,840.3 1142.9,840.3 1148.6,807.2"
                />
                <polygon
                  className="marketPath"
                  opacity="0.75"
                  fill="#F9E420"
                  points="1148.6,233.2 1142.9,233.2 1142.9,233.2 1115.5,233.2 1115.5,266.4 1142.9,266.4"
                />
                <polygon
                  className="marketPath"
                  opacity="0.75"
                  fill="#B6B734"
                  points="1142.9,200 1142.9,200 1115.5,200 1115.5,233.2 1142.9,233.2 1142.9,233.2 1148.6,233.2"
                />
                <polygon
                  className="cty"
                  opacity="0.75"
                  fill="#B3D334"
                  points="1148.6,376.7 1142.9,376.7 1142.9,376.7 1115.5,376.7 1115.5,409.9 1142.9,409.9"
                />
                <polygon
                  className="cty"
                  opacity="0.75"
                  fill="#B6B734"
                  points="1148.6,376.7 1142.9,343.5 1142.9,343.5 1115.5,343.5 1115.5,376.7 1142.9,376.7 1142.9,376.7"
                />
                <polygon
                  className="bbye"
                  opacity="0.75"
                  fill="#F9E420"
                  points="1148.6,878.9 1142.9,878.9 1142.9,878.9 1115.5,878.9 1115.5,912.1 1142.9,912.1"
                />
                <polygon
                  className="bbye"
                  opacity="0.75"
                  fill="#B6B734"
                  points="1142.9,845.7 1142.9,845.7 1115.5,845.7 1115.5,878.9 1142.9,878.9 1142.9,878.9 1148.6,878.9"
                />
                <polygon
                  className="ifttt"
                  opacity="0.75"
                  fill="#DDA527"
                  points="1146.7,602.9 1142.9,602.9 1115.5,602.9 1115.5,624.8 1142.9,624.8   "
                />
                <polygon
                  className="ifttt"
                  opacity="0.75"
                  fill="#F9E420"
                  points="1146.7,581 1142.9,581 1115.5,581 1115.5,602.9 1142.9,602.9 1146.7,602.9 1148.6,591.9"
                />
                <polygon
                  className="ifttt"
                  opacity="0.75"
                  fill="#B6B734"
                  points="1142.9,559.1 1115.5,559.1 1115.5,581 1142.9,581 1146.7,581"
                />

                <polygon
                  className="cow"
                  opacity="0.75"
                  fill="#B6B734"
                  points="1142.9,917.5 1115.5,917.5 1115.5,939.6 1146.7,939.6"
                />
                <polygon
                  className="cow"
                  opacity="0.75"
                  fill="#FED402"
                  points="1115.5,983.8 1142.9,983.8 1146.7,961.7 1115.5,961.7"
                />
                <polygon
                  className="cow"
                  opacity="0.75"
                  fill="#EFCA2E"
                  points="1146.7,939.6 1146.7,939.6 1148.6,950.6"
                />
                <polygon
                  className="cow"
                  opacity="0.75"
                  fill="#EFCA2E"
                  points="1148.6,950.6 1146.7,961.7 1146.7,961.7"
                />
                <polygon
                  className="cow"
                  opacity="0.75"
                  fill="#EFCA2E"
                  points="1146.7,939.6 1115.5,939.6 1115.5,961.7 1146.7,961.7 1148.6,950.6"
                />

                <polygon
                  className="hack"
                  opacity="0.75"
                  fill="#B6B734"
                  points="1115.5,989.3 1115.5,997.6 1144.3,997.6 1142.9,989.3   "
                />
                <polygon
                  className="hack"
                  opacity="0.75"
                  fill="#756629"
                  points="1115.5,997.6 1115.5,1005.9 1145.7,1005.9 1144.3,997.6   "
                />
                <polygon
                  className="hack"
                  opacity="0.75"
                  fill="#F9E420"
                  points="1115.5,1005.9 1115.5,1014.2 1147.1,1014.2 1145.7,1005.9   "
                />
                <polygon
                  className="hack"
                  opacity="0.8"
                  fill="#EFCA2E"
                  points="1115.5,1014.2 1115.5,1022.5 1148.6,1022.5 1147.1,1014.2  "
                />
                <polygon
                  className="hack"
                  opacity="0.75"
                  fill="#DDA527"
                  points="1115.5,1022.5 1115.5,1030.8 1147.1,1030.8 1148.6,1022.5   "
                />
                <polygon
                  className="hack"
                  opacity="0.75"
                  fill="#B3D334"
                  points="1115.5,1030.8 1115.5,1039 1145.7,1039 1147.1,1030.8   "
                />
                <polygon
                  className="hack"
                  opacity="0.75"
                  fill="#FED402"
                  points="1115.5,1039 1115.5,1047.3 1144.3,1047.3 1145.7,1039   "
                />
                <polygon
                  className="hack"
                  opacity="0.75"
                  fill="#918C34"
                  points="1115.5,1047.3 1115.5,1055.6 1142.9,1055.6 1144.3,1047.3   "
                />

                <path
                  className="marketPath theme-fill"
                  fill="#000"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={0}
                  fillRule="evenodd"
                  transform="matrix(1 0 0 1 1222.7649 189.3432) scale(2.7, 4.05)  "
                  stroke="#333"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                />
                <path
                  className="exact theme-fill"
                  fill="#000"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={0}
                  fillRule="evenodd"
                  transform="matrix(1 0 0 1 1222.7649 261.0873) scale(2.7, 4.05)  "
                  stroke="#333"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                />
                <path
                  className="cty theme-fill"
                  fill="#000"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={0}
                  fillRule="evenodd"
                  transform="matrix(1 0 0 1 1222.7649 332.8334) scale(2.7, 4.05)  "
                  stroke="#333"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                />

                <path
                  className="eby theme-fill"
                  fill="#000"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={0}
                  fillRule="evenodd"
                  transform="matrix(1 0 0 1 1222.7825 404.5775) scale(2.7, 4.05)  "
                  stroke="#333"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                />
                <path
                  className="fact theme-fill"
                  fill="#000"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={0}
                  fillRule="evenodd"
                  transform="matrix(1 0 0 1 1222.7649 476.3217) scale(2.7, 4.05)  "
                  stroke="#333"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                />

                <path
                  className="ifttt theme-fill"
                  fill="#000"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={0}
                  fillRule="evenodd"
                  transform="matrix(1 0 0 1 1222.7649 548.0668) scale(2.7, 4.05)  "
                  stroke="#333"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                />

                <path
                  className="pg theme-fill"
                  fill="#000"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={0}
                  fillRule="evenodd"
                  transform="matrix(1 0 0 1 1222.7649 619.8099) scale(2.7, 4.05)  "
                  stroke="#333"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                />
                <path
                  className="find theme-fill"
                  fill="#000"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={0}
                  fillRule="evenodd"
                  transform="matrix(1 0 0 1 1222.76491 691.5541) scale(2.7, 4.05)  "
                  stroke="#333"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                />
                <path
                  className="cnet theme-fill"
                  fill="#000"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={0}
                  fillRule="evenodd"
                  transform="matrix(1 0 0 1 1222.7649 763.2992) scale(2.7, 4.05)  "
                  stroke="#333"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                />
                <path
                  className="bbye theme-fill"
                  fill="#000"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={0}
                  fillRule="evenodd"
                  transform="matrix(1 0 0 1 1222.7649 835.0443) scale(2.7, 4.05)  "
                  stroke="#333"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                />

                <path
                  className="cow theme-fill"
                  fill="#000"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={0}
                  fillRule="evenodd"
                  transform="matrix(1 0 0 1 1222.7649 905.8579) scale(2.7, 4.05)  "
                  stroke="#333"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                />
                <path
                  className="hack theme-fill"
                  fill="#000"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={0}
                  fillRule="evenodd"
                  transform="matrix(1 0 0 1 1222.7649 978.5991) scale(2.7, 4.05)  "
                  stroke="#333"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                />

                <rect
                  className="exact"
                  x="1349.8"
                  y="271.8"
                  opacity="0.75"
                  fill="#80A43E"
                  width="27.3"
                  height="66.4"
                />
                <rect
                  className="cty"
                  x="1349.8"
                  y="343.5"
                  opacity="0.75"
                  fill="#59BD77"
                  width="27.3"
                  height="66.4"
                />
                <rect
                  className="eby"
                  x="1349.8"
                  y="415.2"
                  opacity="0.75"
                  fill="#3A8A41"
                  width="27.3"
                  height="66.4"
                />
                <rect
                  className="fact"
                  x="1349.8"
                  y="487"
                  opacity="0.75"
                  fill="#526C49"
                  width="27.3"
                  height="66.4"
                />
                <rect
                  className="ifttt"
                  x="1349.8"
                  y="558.7"
                  opacity="0.75"
                  fill="#B0D235"
                  width="27.3"
                  height="66.4"
                />
                <rect
                  className="pg"
                  x="1349.8"
                  y="630.5"
                  opacity="0.75"
                  fill="#65BC46"
                  width="27.3"
                  height="66.4"
                />
                <rect
                  className="find"
                  x="1349.8"
                  y="702.2"
                  opacity="0.75"
                  fill="#07592E"
                  width="27.3"
                  height="66.4"
                />
                <rect
                  className="cnet"
                  x="1349.8"
                  y="774"
                  opacity="0.75"
                  fill="#69C07C"
                  width="27.3"
                  height="66.4"
                />
                <rect
                  className="marketPath"
                  x="1349.8"
                  y="200"
                  opacity="0.75"
                  fill="#6DBE49"
                  width="27.3"
                  height="66.4"
                />
                <rect
                  className="bbye"
                  x="1349.5"
                  y="845.7"
                  opacity="0.85"
                  fill="#D3DE26"
                  width="27.3"
                  height="66.4"
                />
                <rect
                  className="cow"
                  x="1349.5"
                  y="917.5"
                  opacity="0.75"
                  fill="#0C4730"
                  width="27.3"
                  height="66.4"
                />
                <rect
                  className="hack"
                  x="1349.8"
                  y="989.3"
                  opacity="0.75"
                  fill="#627332"
                  width="27.3"
                  height="66.4"
                />

                <path
                  className="marketPath"
                  opacity="0.5"
                  fill="#6DBE49"
                  d="M1377.2,200c60.1,1.1,178.4,143.3,209.9,144v33.2c-52.9-3.1-128.4-108.1-209.9-110.8V200z"
                />
                <path
                  className="ifttt"
                  opacity="0.5"
                  fill="#B0D235"
                  d="M1377.2,558.7c19.1,0.3,149.8,277.1,209.9,288.1v66.4c-47.5-4.3-176.7-286-209.9-288.7V558.7z"
                />
                <path
                  className="cow"
                  opacity="0.5"
                  fill="#0C4730"
                  d="M1376.8,917.5c88.4,11.1,124-420.8,210.3-457v11.1c-59.5,5.6-119.9,498.9-210.3,512.3V917.5z"
                />
                <path
                  className="cnet"
                  opacity="0.5"
                  fill="#69C07C"
                  d="M1377.2,774c52.8-5.1,135.8-309.1,209.9-324.5l0.1,11c-57.4,4.9-168.5,378.1-209.9,379.9V774z"
                />
                <path
                  className="find"
                  opacity="0.5"
                  fill="#07592E"
                  d="M1377.2,702.2c63.7,1,113.1-248.9,209.9-263.7v11c-64.8-8.5-163.9,310.2-209.9,319.1V702.2z"
                />
                <path
                  className="pg"
                  opacity="0.5"
                  fill="#65BC46"
                  d="M1377.2,630.5c55.3,0.3,99.5-185,209.9-203v11c-85.8-1.6-160.3,253-209.9,258.4V630.5z"
                />
                <path
                  className="fact"
                  opacity="0.35"
                  fill="#526C49"
                  d="M1377.3,487c61-7.4,156.9,145.3,209.7,144.6v66.4c-63.3-13.7-149.7-193-209.7-188.8V487z"
                />
                <path
                  className="fact"
                  opacity="0.35"
                  fill="#526C49"
                  d="M1377.3,509.1c56.2,2.6,154.9,192.1,209.7,194.2v66.4c-48.5-18.4-168.2-239.2-209.7-238.4V509.1z"
                />
                <path
                  className="fact"
                  opacity="0.35"
                  fill="#526C49"
                  d="M1377.3,531.2c45.6,13.5,143.9,223.7,209.7,243.8v66.4c-66-13.7-175.4-287.1-209.7-288.1V531.2z"
                />
                <path
                  className="eby"
                  opacity="0.5"
                  fill="#3A8A41"
                  d="M1377.2,415.2c54.8,1.1,123.5,3.5,209.9,1.3v11c-65.6,1.7-166,50.6-209.9,54.1V415.2z"
                />
                <path
                  className="cty"
                  opacity="0.5"
                  fill="#59BD77"
                  d="M1376.9,343.5c51.2,1.4,147.3,178.1,210.1,177.8v33.2c-61.1-3.6-168.4-177.3-210.1-177.8V343.5z"
                />
                <path
                  className="cty"
                  opacity="0.5"
                  fill="#59BD77"
                  d="M1376.9,376.7c37.8,1.8,137.5,176.9,210.1,183.1v66.4c-55.2-17.2-178.2-210.5-210.1-216.3V376.7z"
                />
                <path
                  className="exact"
                  opacity="0.5"
                  fill="#80A43E"
                  d="M1377.2,272c37.4,0,151.8,212.3,209.9,216.2v33.2c-63.5-1.3-149.3-183.5-209.9-183.5V272z"
                />
                <path
                  className="hack"
                  opacity="0.6"
                  fill="#627332"
                  d="M1377.2,989.3c143.5,15.3,133.9-483.2,209.9-517.8l-0.1,11c-52.9,30.1-59.8,565.9-209.9,573.1V989.3z"
                />
                <path
                  className="bbye"
                  opacity="0.65"
                  fill="#D3DE26"
                  d="M1376.8,845.7c97.5,15.2,84.8-473.4,210.2-468.6v33.2c-103.6-29.2-113.9,497.2-210.2,501.7V845.7z"
                />

                <polygon
                  className="cty"
                  opacity="0.75"
                  fill="#59BD77"
                  points="1620,521.4 1614.4,521.4 1614.4,521.4 1587,521.4 1587,554.5 1614.4,554.5"
                />
                <polygon
                  className="exact"
                  opacity="0.75"
                  fill="#80A43E"
                  points="1620,521.4 1614.4,488.2 1614.4,488.1 1587,488.1 1587,521.4 1614.4,521.4 1614.4,521.4"
                />
                <polygon
                  className="cty"
                  opacity="0.75"
                  fill="#59BD77"
                  points="1614.4,559.8 1613.1,559.8 1587,559.8 1587,626.2 1613.1,626.2 1614.4,626.2 1620,593"
                />
                <polygon
                  className="fact"
                  opacity="0.75"
                  fill="#526C49"
                  points="1614.4,631.6 1613.1,631.6 1587,631.6 1587,697.9 1613.1,697.9 1614.4,697.9 1620,664.7"
                />
                <polygon
                  className="fact"
                  opacity="0.75"
                  fill="#526C49"
                  points="1614.4,703.3 1613.1,703.3 1613.1,703.3 1587,703.3 1587,769.7 1613.1,769.7 1614.4,769.7 1620,736.5"
                />
                <polygon
                  className="fact"
                  opacity="0.75"
                  fill="#526C49"
                  points="1614.4,775.1 1613.1,775.1 1587,775.1 1587,841.4 1613.1,841.4 1613.1,841.4 1614.4,841.4 1620,808.2"
                />
                <polygon
                  className="ifttt"
                  opacity="0.75"
                  fill="#B0D235"
                  points="1614.4,846.8 1613.1,846.8 1587,846.8 1587,913.2 1613.1,913.2 1613.1,913.2 1614.4,913.2 1620,880"
                />
                <polygon
                  className="marketPath"
                  opacity="0.75"
                  fill="#6DBE49"
                  points="1587,377.2 1620,377.2 1614.4,344 1587,344"
                />
                <polygon
                  className="bbye"
                  opacity="0.85"
                  fill="#D3DE26"
                  points="1587,377.2 1587,410.3 1614.4,410.3 1620,377.2"
                />

                <polygon
                  className="eby"
                  opacity="0.75"
                  fill="#3A8A41"
                  points="1587,416.5 1587,427.5 1616.3,427.5 1614.4,416.5  "
                />
                <polygon
                  className="pg"
                  opacity="0.75"
                  fill="#65BC46"
                  points="1587,427.5 1587,438.5 1618.1,438.5 1616.3,427.5   "
                />
                <polygon
                  className="find"
                  opacity="0.75"
                  fill="#07592E"
                  points="1587,438.5 1587,449.5 1620,449.5 1618.1,438.5   "
                />
                <polygon
                  className="cnet"
                  opacity="0.75"
                  fill="#69C07C"
                  points="1587,449.5 1587.1,460.4 1618.1,460.4 1620,449.5   "
                />
                <polygon
                  className="cow"
                  opacity="0.75"
                  fill="#0C4730"
                  points="1587.1,460.4 1587.1,471.5 1616.3,471.5 1618.1,460.4  "
                />
                <polygon
                  className="hack"
                  opacity="0.75"
                  fill="#627332"
                  points="1587.1,471.5 1587,482.5 1614.4,482.5 1616.3,471.5   "
                />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}
