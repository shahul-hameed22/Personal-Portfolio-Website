import React from 'react'
import mypic from '../images/MyPic.png'
import pic2 from '../images/Pic2.png'
import resume from '../images/ShahulHameed-Resume.pdf'

const Home = (props) => {
  const darkmode2 = props.mode === "dark" ? "text-info" : "text-purple-700"
  return (
    <div id='first' className='d-flex flex-wrap'>
      <div className="header-text w-50">
        <h1 className='mt-16'> <span className={`span1 ${props.mode === "dark" && 'text-white'}`}>Hi, I'am</span> <span className={`span2 ${props.mode === "dark" && 'text-info'}`}>Shahul Hameed</span></h1>
        <h4 className={`${props.mode === "dark" && 'text-white'}`}><span className={`span1 ${props.mode === "dark" && 'text-info'}`}>Web Developer</span> </h4>
        <p className={`mb-0 mt-3 text-justify italic ${props.mode === "dark" && 'text-white'} `} style={{ fontSize: '15px', lineHeight: '1.5rem' }}> Innovative Full Stack Web
          Developer with a passion for creating seamless & engaging web experiences. Proficient in both front-end & back-end
          technologies, specializing in Django & MERN Stack. Proven track
          record of driving successful project outcomes & fostering team growth through hands-on leadership and
          mentorship. Adept at utilizing React, Python, HTML, CSS, & JavaScript to build scalable & responsive
          applications. Excited about contributing creative solutions & technical expertise to elevate development
          initiatives.
        </p>
        <div className="flex gap-4 text-xl mt-3 mb-2 ps-2 headerLinks">
               <a href="https://github.com/shahulhameed09"><i className={`fa-brands fa-github ${darkmode2}`}> </i></a>
               <a href="https://www.linkedin.com/in/shahul-hameed-4670ab22b"><i className={`fa-brands fa-linkedin ${darkmode2}`}> </i></a>
               <a href="https://instagram.com/shahul.hameed22?igshid=YmMyMTA2M2Y="><i className={`fa-brands fa-instagram ${darkmode2}`}> </i></a>
               <a href="whatsapp://send?phone=+916364074061"><i className={`fa-brands fa-whatsapp ${darkmode2}`}> </i></a>
            </div>
        <a href={resume} rel="noreferrer" className={`btn w-25 px-4 btn-primary ${props.mode === "dark" && 'btn-info'}`} target="_blank">Download CV</a>
      </div>
      <div className='image w-50'>
        <svg id="sw-js-blob-svg" viewBox="10 20 80 70" xmlns="http://www.w3.org/2000/svg" style={{ height: '26rem', width: '40rem' }}>
          <defs>
            <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
              {props.mode === "light" ?
                <>
                  <stop id="stop1" stopColor="rgba(49.648, 0, 255, 1)" offset="0%"></stop>
                  <stop id="stop2" stopColor="rgba(209.775, 190.838, 238.985, 1)" offset="100%"></stop>
                </>
                :
                <>
                  <stop id="stop1" stopColor="rgb(50, 44, 60)" offset="0%"></stop>
                  <stop id="stop2" stopColor="rgba(209.775, 190.838, 238.985, 1)" offset="100%"></stop>
                </>}
            </linearGradient>
          </defs>
          <mask id='mask1' mask-type='alpha'>
            <path fill="url(#sw-gradient)" d="M19.3,-19.8C27,-16.6,36.6,-12.4,39.1,-5.8C41.6,0.8,37,9.7,31.5,17.3C26.1,24.8,19.8
            ,30.8,11.8,34.9C3.8,38.9,-5.9,40.9,-12.9,37.5C-20,34.1,-24.3,25.3,-27.4,17.2C-30.4,9,-32.2,1.5,-30.8,-5.3C-29.5,-12.2,-25.1,
            -18.4,-19.4,-21.9C-13.8,-25.5,-6.9,-26.4,-0.5,-25.7C5.8,-25.1,11.6,-22.9,19.3,-19.8Z" width="100%" height="100%"
              transform="translate(50 50)" strokeWidth="0" style={{ transition: 'all 0.3s ease 0s' }} stroke="url(#sw-gradient)"></path>
          </mask>
          <g mask='url(#mask1)' mask-type='alpha'>
            <path fill="url(#sw-gradient)" d="M19.3,-19.8C27,-16.6,36.6,-12.4,39.1,-5.8C41.6,0.8,37,9.7,31.5,17.3C26.1,24.8
            ,19.8,30.8,11.8,34.9C3.8,38.9,-5.9,40.9,-12.9,37.5C-20,34.1,-24.3,25.3,-27.4,17.2C-30.4,9,-32.2,1.5,-30.8,
            -5.3C-29.5,-12.2,-25.1,-18.4,-19.4,-21.9C-13.8,-25.5,-6.9,-26.4,-0.5,-25.7C5.8,-25.1,11.6,-22.9,19.3,-19.8Z"
              width="100%" height="100%" transform="translate(50 50)" strokeWidth="0"
              style={{ transition: 'all 0.3s ease 0s' }} stroke="url(#sw-gradient)"></path>
            {props.mode === "light" ? <image className='w-20' x='16' y='25' href={mypic} alt="" /> :
              <image className='w-20' x='18' y='14' href={pic2} alt="" />
            }
          </g>
        </svg>
      </div>
    </div>
  )
}

export default Home
