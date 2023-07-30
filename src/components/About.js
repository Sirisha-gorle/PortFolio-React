import React from 'react'
import Image1 from '../images/image1.jpg'
import Resume from '../images/Sirisha_Resume.pdf'

const About = () => {
  return (
    <section className="about" id="about">
        <div className="max-width">
            <h2 className="title">About me</h2>
            <div className="about-content">
                <div className="column left">
                    <img src={Image1} alt="meraface"/>
                </div>
                <div className="column right">
                    <div className="text">I'm Gorle Sirisha </div>
                    <p>I'm currently pursuing my B.Tech at Indian Institute of Engineering Science and Technology, Shibpur in Electronics and Telecommunication Engineering Department.</p>
                    <p>I love doing programming, solving problems. check me on <a href="https://leetcode.com/sirisha9515/" target='blank'>Leetcode</a>, and <a href="https://auth.geeksforgeeks.org/user/sirishagorle2002/practice" target="blank">Geeks For Geeks</a>.</p>
                    <p>My other interests are Web Development, Cyber Security.</p>
                    <p>My core interest lies mainly in web development but not restricted to it. I always love exploring and learning new technologies.</p>
                    <p>In my free time, I like playing badminton.</p>
                    <a className="resumeBtn" href={Resume} target="_blank" rel="noreferrer">Download Resume</a>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About;
