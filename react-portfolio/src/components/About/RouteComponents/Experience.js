import React from 'react'

import '../../../styles/About/Route/Experience.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons'

const Experience = () => {
    return (
        <>
            <div className="experience">
                <div className="experience__container">
                    <div className="experience__header">
                        <h2 className="experience__number">0<span>2</span></h2>
                        <h1 data-aos='fade-down' data-aos-offset="0">E<span>xperience</span>.</h1>
                    </div>
                    <div className="experience__description">
                        <div className="experience__main-box">
                            <div className="experience__box">
                                <h2>Maxbyte Technologies</h2>
                                <h3><FontAwesomeIcon icon={faCalendarDays} className="experience__calendar" />&nbsp; &nbsp;17/01/2023 - PRESENT</h3>
                                <ul>
                                    <p>Responsible for -</p>
                                    <li data-aos='fade-right' data-aos-delay='200'>
                                        <span>Developing multiple highly responsive and adaptive website using React js and Javascript</span>
                                    </li>
                                    <li data-aos='fade-right' data-aos-delay='400'>
                                        <span>Developing new user-facing features</span>
                                    </li>
                                    <li data-aos='fade-right' data-aos-delay='600'>
                                        <span>Experience in building reusable components, managing state with hooks, and optimizing performance.</span>
                                    </li>
                                    <li data-aos='fade-right' data-aos-delay='800'>
                                        <span>Focus on creating responsive and interactive user interfaces with HTML5, CSS3, and modern design libraries (e.g., Material-UI, Bootstrap, Ant Design).</span>
                                    </li>
                                    <li data-aos='fade-right' data-aos-delay='800'>
                                        <span>Skilled in integrating RESTful APIs and handling complex data flows.</span>
                                    </li>
                                    <li data-aos='fade-right' data-aos-delay='800'>
                                        <span>Proficient in using browser developer tools for debugging and Jest/Enzyme for unit testing.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Experience