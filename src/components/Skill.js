import React from 'react'
import { Link } from 'react-router-dom'

const Skill = () => {
  return (
    <section className="skills" id="skills">
        <div className="max-width">
            <h2 className="title">My skills</h2>
            <div className="skills-content">
                <div className="column right">
                    <div className="bars">
                        <div className="info">
                            <span>C / C++</span>
                            <span>100%</span>
                        </div>
                        <div className="line c"></div>
                    </div>
                    <div className="bars">
                        <div className="info">
                            <span>Python</span>
                            <span>70%</span>
                        </div>
                        <div className="line python"></div>
                    </div>
                    <div className="bars">
                        <div className="info">
                            <span>HTML</span>
                            <span>95%</span>
                        </div>
                        <div className="line html"></div>
                    </div>
                    <div className="bars">
                        <div className="info">
                            <span>CSS</span>
                            <span>95%</span>
                        </div>
                        <div className="line css"></div>
                    </div>
                    <div className="bars">
                        <div className="info">
                            <span>JavaScript</span>
                            <span>80%</span>
                        </div>
                        <div className="line js"></div>
                    </div>
                    <div className="bars">
                        <div className="info">
                            <span>Nodejs</span>
                            <span>50%</span>
                        </div>
                        <div className="line nodejs"></div>
                    </div>
                    <div className="bars">
                        <div className="info">
                            <span>Reactjs</span>
                            <span>70%</span>
                        </div>
                        <div className="line reactjs"></div>
                    </div>
                    <div className="bars">
                        <div className="info">
                            <span>MongoDB</span>
                            <span>50%</span>
                        </div>
                        <div className="line mongodb"></div>
                    </div>
                    <div className="bars">
                        <div className="info">
                            <span>PHP</span>
                            <span>50%</span>
                        </div>
                        <div className="line php"></div>
                    </div>
                    <div className="bars">
                        <div className="info">
                            <span>MySQL</span>
                            <span>80%</span>
                        </div>
                        <div className="line mysql"></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skill;
