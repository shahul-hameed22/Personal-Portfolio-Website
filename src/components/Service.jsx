import React from 'react'

const Service = (props) => {
    const boxStyle ="shadow text-white text-center p-12 font-medium rounded-2xl cursor-pointer bg-gradient-to-b from-purple-500 to-purple-900  transition-all transform duration-500 hover:from-purple-400  hover:-translate-y-3"
    const boxStyle2 ="shadow text-white text-center p-12 font-medium rounded-2xl cursor-pointer bg-gray-600  transition-all transform duration-500 hover:bg-gray-700  hover:-translate-y-3"
  return (
    <>
        <h1 className="text-center mb-5">My Services</h1>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className={props.mode === "light" ? boxStyle : boxStyle2}>
            <i className="fa-solid text-4xl mb-3 fa-globe"></i>
            <h2>Full Stack <br/>Web Developer</h2>
          </div>
          <div className={props.mode === "light" ? boxStyle : boxStyle2}>
            <i className="fa-solid text-4xl mb-3 fa-laptop-code"></i>
            <h2>Front End <br/>Web Developer</h2>
          </div>
          <div className={props.mode === "light" ? boxStyle : boxStyle2}>
            <i className="fa-solid text-4xl mb-3 fa-server"></i>
            <h2>Back End <br/>Web Developer</h2>
          </div>
        </div>
    </>
  )
}

export default Service
