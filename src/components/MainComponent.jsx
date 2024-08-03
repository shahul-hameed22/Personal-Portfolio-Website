import React from 'react'
import Contact from './Contact'
import Footer from './Footer'
import Home from './Home'
import About from './About'
import Projects from './Projects'
import Service from './Service'


const MainComponent = (props) => {
    const mode_1 = {background: props.mode === "light" ? '#d8b4fe' : "#1f2937" }
    const mode_2 = {background: props.mode === "light" ? '#beb7ff6d' : "rgb(21 27 36)" }
    return (
        <div className={`maindiv pt-14 ${props.mode === "dark" && 'text-white'}`}>
            <div style={mode_1} id="home"><Home mode={props.mode} /></div>
            <div style={mode_2} id="About"><About mode={props.mode} /></div>
            <div style={mode_1}  id="service"><Service mode={props.mode} /></div>
            <div style={mode_2} id="projects"><Projects mode={props.mode} /></div>
            <div style={mode_1}  id="contact"><Contact mode={props.mode} /></div>
            <Footer mode={props.mode} />
        </div>
    )
}

export default MainComponent
