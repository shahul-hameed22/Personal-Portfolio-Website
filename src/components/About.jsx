import React, { useEffect, useState } from 'react'
import mypic from '../images/Pic2.png'
import pic2 from '../images/MyPic.png'

const About = (props) => {
    const custom_color = props.mode === 'light' ? '#0e008d' : 'color(rec2020 0.78 0.61 0.58)'
    const [showlink, setShowlink] = useState("experience")
    const handelSwitchAbout = (data) => {
        setShowlink(data);
    }
    useEffect(() => {
        if (showlink === "experience") {
            document.getElementById("experience").classList.add("active");
            document.getElementById("certificate").classList.remove("active");
            document.getElementById("skills").classList.remove("active");
        } else if (showlink === "skills") {
            document.getElementById("experience").classList.remove("active");
            document.getElementById("certificate").classList.remove("active");
            document.getElementById("skills").classList.add("active");
        } else {
            document.getElementById("experience").classList.remove("active");
            document.getElementById("certificate").classList.add("active");
            document.getElementById("skills").classList.remove("active");
        }
        //eslint-disable-next-line
    }, [handelSwitchAbout]);

    const aboutLink = [
        {
            href: "experience",
            text: "Work Experience"
        },
        {
            href: "skills",
            text: "Skills"
        },
        {
            href: "certificate",
            text: "Certificates"
        }
    ]

    const lightModeStyle = "text-center cursor-pointer text-xl border-b-2 border-purple-700 hover:border-purple-800 mx-1 py-2 font-bold"
    const darkModeStyle = "text-center cursor-pointer text-xl border-b-2 border-gray-500 hover:border-gray-600 mx-1 py-2 font-bold"

    return (
        <div>
            <div id='about' className="d-flex">
                <div className="image" style={{ width: '42%' }}>
                    <svg id="sw-js-blob-svg" viewBox="10 22 80 75" xmlns="http://www.w3.org/2000/svg" version="1.1" style={{ height: '26rem', width: '40rem', marginLeft: '-5rem' }}>
                        <g mask='url(#mask1)' mask-type='alpha'>
                            <path fill="url(#sw-gradient)" d="M19.3,-19.8C27,-16.6,36.6,-12.4,39.1,-5.8C41.6,0.8,37,9.7,31.5,17.3C26.1,24.8
                                ,19.8,30.8,11.8,34.9C3.8,38.9,-5.9,40.9,-12.9,37.5C-20,34.1,-24.3,25.3,-27.4,17.2C-30.4,9,-32.2,1.5,-30.8,
                                -5.3C-29.5,-12.2,-25.1,-18.4,-19.4,-21.9C-13.8,-25.5,-6.9,-26.4,-0.5,-25.7C5.8,-25.1,11.6,-22.9,19.3,-19.8Z"
                                width="100%" height="100%" transform="translate(50 50)" strokeWidth="0"
                                style={{ transition: 'all 0.3s ease 0s' }} stroke="url(#sw-gradient)"></path>
                            {props.mode === "light" ? <image className='w-20' x='18' y='14' href={mypic} alt="" /> :
                                <image className='w-20' x='16' y='25' href={pic2} alt="" />
                            }
                        </g>
                    </svg>
                </div>

                <div className={`information ${props.mode === "dark" && 'text-white'} `} style={{ width: '68%', color: '#0e008d' }}>
                    <div className="grid grid-cols-3 heading">
                        {props.mode === "light" ?
                            aboutLink.map((i) => {
                                return (
                                    <p className={`${lightModeStyle} ${showlink === i.href && 'border-purple-900 border-b-4 '} `} onClick={() => { handelSwitchAbout(i.href) }}>{i.text}</p>
                                )
                            }) :
                            aboutLink.map((i) => {
                                return (
                                    <p className={`${darkModeStyle}  ${showlink === i.href && 'border-info border-b-4 '} `} onClick={() => { handelSwitchAbout(i.href) }}>{i.text}</p>
                                )
                            })
                        }


                    </div>

                    <div className="tab-contents active" id="experience">
                        <div style={{ marginLeft: '1rem', color: custom_color }} className='pb-0 mt-2'>
                            <div className="d-grid align-items-baseline">
                                <div className="d-flex font-semibold text-lg butt2">
                                    <p className='mb-0'> IGeeks Technologies</p>
                                    <p className='ms-auto mb-0'>Bangalore, Karnataka</p>
                                </div>
                                <div className="d-flex font-semibold italic butt">
                                    <p className='mb-0'>Web Developer</p>
                                    <p className='ms-auto mb-0'> Oct 2022 - May 2024</p>
                                </div>
                            </div>
                        </div>
                        <ul className='italic'>
                            <li>Led the development of cutting-edge web applications, demonstrating mastery in leveraging Django and
                                React technologies to deliver impactful outcomes.</li>
                            <li>Played a key role in mentoring & training initiatives, cultivating a collaborative learning environment for
                                interns in full-stack development using Django.</li>
                            <li>Applied Django MVT architecture to streamline application design, coding, & development in Python.</li>
                            <li>Contributed significantly to React projects, utilizing components, Redux for state management, Forms,
                                Events, Routers, & Hooks to elevate user experiences.</li>
                            <li>Implemented efficient testing procedures, reducing bugs by 20% & enhancing overall application stability.</li>
                            <li>Spearheaded the optimization of web application performance, resulting in a 15% increase in site
                                responsiveness.</li>

                        </ul>

                    </div>
                    <div className="tab-contents" id="skills">
                        <ul>
                            <li><span style={{ color: custom_color }} >Front-End Development</span>
                                <p className='italic'>React JS,Tailwind CSS, Bootstrap, HTML, CSS, & JavaScript.</p>
                            </li>
                            <li><span style={{ color: custom_color }} >Back-End Development</span>
                                <p className='italic'>Python, Django framework, & the MERN Stack basics.</p>
                            </li>
                            <li><span style={{ color: custom_color }} >Tools & Version Control</span>
                                <p className='italic'>Visual Studio Code, Thunder Client, Git & GitHub.</p>
                            </li>
                            <li><span style={{ color: custom_color }} >Cloud Platforms</span>
                                <p className='italic'>AWS (EC2 & S3) basics.</p>
                            </li>
                            <li><span style={{ color: custom_color }} >Database</span>
                                <p className='italic'>SQL (PostgreSQL, SQLite) & NoSQL (MongoDB) systems.</p>
                            </li>
                        </ul>
                    </div>
                    <div className="tab-contents" id="certificate">
                        <ul>
                            <li><span style={{ color: custom_color }} >Python Programming</span>
                                <p className='italic'> Attained certification for mastering "Python Programming - Basics to Advanced" through Udemy.</p>
                            </li>
                            <li><span style={{ color: custom_color }} >Django Framework</span>
                                <p className='italic'> Completed the "Python & Django Framework for Beginners Complete Course" on Udemy.</p>
                            </li>
                            <li><span style={{ color: custom_color }} >React JS</span>
                                <p className='italic'> Demonstrated proficiency in React JS by completing "The Complete React JS - Basics to
                                    Advanced" on Udemy.</p>
                            </li>
                            <li><span style={{ color: custom_color }} >Command Line</span>
                                <p className='italic'>Earned certification in "Learn the Command Line Course" from Codecademy.</p>
                            </li>
                            <li><span style={{ color: custom_color }} >Git & GitHub</span>
                                <p className='italic'>Mastered version control with "Learn Git & GitHub" earning certification from Codecademy.</p>
                            </li>
                        </ul>
                    </div>

                </div>

            </div>
        </div >
    )
}



export default About
