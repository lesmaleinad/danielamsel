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

const About = (props) => (
    <div className={`about page col ${props.transition}`}>
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
                    <p>I find efficient and graceful pathways to create high-impact experiences. Here are some tools that I've used to do it:</p>
                    <div className="about__tools row justify-content-center">
                        {tools.map((t)=>(
                            <AboutTool name={t.name} image={t.image} content = {t.content} key={t.name} />
                        ))}
                    </div> 
                </div>
            </div>

            <hr />

            <div className="page__text">
                
                <p>
                
                 </p>
                
            </div>

        </div>
        
    </div>
)

export default About