import React from 'react'
import { Link } from 'react-router-dom'
import Banner from '../images/5152169.jpg'
import ReactRotatingText from 'react-rotating-text';

const Home = () => {
  return (
    <section className="home" id="home" style={{background: `url(${Banner}) no-repeat center`}}>
        <div className="max-width">
            <div className="home-content">
                <div className="text-1">Hello, my name is</div>
                <div className="text-2">Gorle Sirisha</div>
                <div className="text-3">And I'm a <span className="typing"><ReactRotatingText items={['Full Stack Developer', 'Competitive Programmer']} /></span></div>
                <div className="text-4">Click here to know</div>
                <Link to="/about">About me</Link>
            </div>
        </div>
    </section>
  )
}

export default Home;
