import React from 'react'
import Project0 from '../images/project0.png'
import Project1 from '../images/project1.png'
import Project2 from '../images/project2.png'
import Project3 from '../images/project3.png'
import Project4 from '../images/project4.png'

const Service = () => {
  return (
    <section className="services" id="services">
        <div className="max-width">
            <h2 className="title">My Project</h2>
            <div className="serv-content">
                <a href='' className="card">
                    <div className="img">
                        <img src={Project0} alt="Portfolio"/>
                    </div>
                    <div className="box">
                        <div className="text">Portfolio</div>
                        <p>It contains details of which projects i have worked on and which languages i am familiar with and my interests.</p>
                    </div>
                    <div className="techno">
                        <span><i class="fa-brands fa-html5"></i><span> HTML</span></span>
                        <span><i class="fa-brands fa-css3"></i><span> CSS</span></span>
                        <span><i class="fa-brands fa-js"></i><span> JavaScript</span></span>
                        <span><i class="fa-brands fa-node"></i><span> Nodejs</span></span>
                        <span><i class="fa-brands fa-react"></i><span> Reactjs</span></span>
                        <span><i class="fa-solid fa-database"></i><span> Mysql</span></span>
                    </div>
                </a>
                <a href='' className="card">
                    <div className="img">
                        <img src={Project4} alt="CoffeeShop"/>
                    </div>
                    <div className="box">
                        <div className="text">CoffeShop</div>
                        <p>It contains details about a CoffeShop , the available coffee varieties in it with their costs and a form is also provided with quantitiy selection option etc., in the site for ordering the items.</p>
                    </div>
                    <div className="techno">
                        <span><i class="fa-brands fa-html5"></i><span> HTML</span></span>
                        <span><i class="fa-brands fa-css3"></i><span> CSS</span></span>
                        <span><i class="fa-brands fa-js"></i><span> JavaScript</span></span>
                    </div>
                </a>
                <a href='' className="card">
                    <div className="img">
                        <img src={Project1} alt="Inventrom Website"/>
                    </div>
                    <div className="box">
                        <div className="text">Inventrom Website</div>
                        <p>It provides all the details about Inventrom company, awards received by the comapany the contact details i.e phone no., location and there is also a form to get in touch with company.</p>
                    </div>
                    <div className="techno">
                        <span><i class="fa-brands fa-html5"></i><span> HTML</span></span>
                        <span><i class="fa-brands fa-css3"></i><span> CSS</span></span>
                        <span><i class="fa-brands fa-js"></i><span> JavaScript</span></span>
                    </div>
                </a>
                <a href='' className="card">
                    <div className="img">
                        <img src={Project3} alt="To-Do-List"/>
                    </div>
                    <div className="box">
                        <div className="text">Task-App</div>
                        <p>This app keeps track of the tasks.Tasks can be added, removed, sorted in a particular order,can also be marked as completed, not completed, important.Light/Dark modes are also available.</p>
                    </div>
                    <div className="techno">
                        <span><i class="fa-brands fa-html5"></i><span> HTML</span></span>
                        <span><i class="fa-brands fa-css3"></i><span> CSS</span></span>
                        <span><i class="fa-brands fa-js"></i><span> JavaScript</span></span>
                        <span><i class="fa-brands fa-react"></i><span> Reactjs</span></span>
                    </div>
                </a>
                <a href='' className="card">
                    <div className="img">
                        <img src={Project2} alt="Netflix Clone"/>
                    </div>
                    <div className="box">
                        <div className="text">Netflix Colne</div>
                        <p>It is a full stack project which is a clone of Netflix with basic features of actual Netflix.</p>
                    </div>
                    <div className="techno">
                        <span><i class="fa-brands fa-html5"></i><span> HTML</span></span>
                        <span><i class="fa-brands fa-css3"></i><span> CSS</span></span>
                        <span><i class="fa-brands fa-js"></i><span> JavaScript</span></span>
                        <span><i class="fa-brands fa-node"></i><span> Nodejs</span></span>
                        <span><i class="fa-brands fa-react"></i><span> Reactjs</span></span>
                        <span><i class="fa-brands fa-mongodb"></i><span> Mongodb</span></span>
                        <span><i class="fa-brands fa-tailwindcss"></i><span> Tailwind CSS</span></span>
                    </div>
                </a>
               </div>
            </div>
    </section>
  )
}

export default Service;
