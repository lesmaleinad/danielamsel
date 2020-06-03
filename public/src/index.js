import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, NavLink, Redirect} from 'react-router-dom';
import Intro from './components-intro/Intro';
import Navigation from './components/Navigation';
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'

const App = () => (
    <BrowserRouter>
         <Route component = {PortfolioApp} />
    </BrowserRouter>
)

class PortfolioApp extends React.Component {
    constructor(props){
        super(props);

        this.pages = ['about', 'projects', "contact"];
        this.pageComponents = {
            about: <About />,
            projects: <Projects />,
            contact: <Contact />
        }


        this.endIntro = this.endIntro.bind(this);
        this.getPage = this.getPage.bind(this);
    }

    endIntro(){
        this.props.history.push('/about')
    }

    getPage(page){
        console.log(page, this.pages[0])
        if (!this.pages.find(pg => pg == page)){
            return <Redirect to="/" />
        } else {
            const newPage = this.pageComponents[page];
            return (
                <div className = "main row flex-column flex-lg-row">
                    <Navigation pages={this.pages} header='Daniel Amsel' intro={false}/>
                    {newPage}
                </div>
                
            )
        }
    }


    render(){ 

        return (this.props.location.pathname === '/') ? <Intro pages={this.pages} endIntro={this.endIntro} />

        : this.getPage(this.props.location.pathname.slice(1))
    }
}

// function NavTab(props){
//     return (
//         <NavLink
//             exact={true}
//             className = {"nav-item nav-link"}
//             id = {`nav-${props.tab}-tab`} 
//             data-toggle="tab" 
//             to= {`/${props.tab}`}
//             role="tab" 
//             aria-controls={`nav-${props.tab}`} 
//             aria-selected='false'
//         >
//             {props.tab}
//         </NavLink>
        
//     )
// }

ReactDOM.render(<App />, document.getElementById('app'))