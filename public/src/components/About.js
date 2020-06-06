import React from 'react';
import AboutTool from './AboutTool';

const tools = [
    {name: 'javascript', image: './images/logos/javascript-logo.jpg', content: 'Javascript'},
    {name: 'nodejs', image: './images/logos/nodejs-logo.jpg', content: 'Node JS'},
    {name: 'reactjs', image: './images/logos/react-logo.jpg', content: 'React JS'},
    {name: 'socketio', image: './images/logos/socketio-logo.jpg', content: 'Socket.io'},
    {name: 'vr', image: './images/logos/vr-logo.jpg', content: 'Virtual Reality'},
    {name: 'knives', image: './images/logos/knives-logo.jpg', content: 'High Carbon Sushi Knives'},
    {name: 'espresso', image: './images/logos/espresso-logo.jpg', content: 'Italian Espresso Machines'},
    {name: 'theatre', image: './images/logos/theatre-logo.jpg', content: 'Immersive Theatre'},
]

const About = ( n) => (
    <div className='about page'>
        <h2 className="display-4">About</h2>
        <div className="page__content">
            <div className='page__text'>
                <p>
                    I am a passionate developer, artist, and entrepreneur currently working as the Operations Manager for <a href='http://creekside.cafe'>Grounds for Coffee Creekside Cafe</a>.
                </p>
            </div>

            <hr />

            <div className="page__text">
                <div>
                    <p>I work to create efficient and elegant structures for high-impact experiences. Here are some tools that I've used to do it:</p>
                    <div className="about__tools row justify-content-center">
                        {tools.map((t)=>(
                            <AboutTool name={t.name} image={t.image} content = {t.content} key={t.name} />
                        ))}
                    </div> 
                </div>
            </div>

            <hr />

            <div className="page__text">
                <h3>Education</h3>
                <p>
                    I have a <span className="underline">BFA in Theatre</span> from the University of Utah, where I worked in acting, directing, writing, and project management. I’ve been in dozens of productions, acting as everything from a chorus member to the title character, and I’ve accumulated soft skills in collaborative creation and design that other developers will not have. For my senior project, I developed a VR app that integrated with an immersive theatre piece <a href="https://dailyutahchronicle.com/2017/04/19/student-play-purgatory-provides-experience-danger-safety/">that I wrote</a>. That's when I knew I loved developement.
                 </p>
                 <h3>A Theater Person that's a Dev? Seriously?</h3>
                 <p>
                    I've always been technical minded, and I learn wicked fast. I’ve developed small games as a child, worked with robots in school, and excelled in math. I believe my abilities to solve problems technically and creatively are part of the same skillset. Both are vital in full stack web development.
                </p>
            </div>

        </div>
        
    </div>
)

export default About