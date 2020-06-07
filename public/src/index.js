import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Redirect} from 'react-router-dom';
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
        this.currentPage = '';
        this.nextPage = '';
        this.pageComponents = {
            about: <About />,
            projects: <Projects />,
            contact: <Contact />
        };

        this.endIntro = this.endIntro.bind(this);
        this.getPage = this.getPage.bind(this);
        this.startTransition = this.startTransition.bind(this);
        this.endTransition = this.endTransition.bind(this);
    };

    endIntro(){
        this.props.history.push('/about')
    };

    getPage(page){

        if (!this.pages.find(pg => pg == page)){
            return <Redirect to="/" />
        } else {

            const newPage = this.pageComponents[page];
            
            if (!this.currentPage || this.currentPage == page || this.nextPage){

                this.currentPage = page;
                this.nextPage = '';

                return (
                    <div className = "main row flex-column flex-lg-row">
                        <Navigation pages={this.pages} header='Daniel Amsel' intro={false}/>
                        <div className='col'><div>{newPage}</div></div>
                    </div>
                    
                )
            } else {
               return this.startTransition(page, this.currentPage)

            }
        }
    };

    startTransition(newPage, oldPage){

        this.nextPage = newPage;

        const wasIntro = oldPage === 'intro'

        const isGoingDown = this.pages.indexOf(newPage) > this.pages.indexOf(oldPage);
        

        setTimeout(this.endTransition, 600)

        if (wasIntro) {
            return (
                <div className = "main row flex-column flex-lg-row">

                <Navigation pages={this.pages} header='Daniel Amsel' intro={false}/>

                <div id="transition" className="col">
                    <div className={"transition--wrapper transition--in"}>{this.pageComponents[newPage]}</div>
                </div>
            </div>
            )
        }

        else return (

            <div className = "main row flex-column flex-lg-row">

                <Navigation pages={this.pages} header='Daniel Amsel' intro={false}/>

                <div id="transition" className="col">
                    <div className={"transition--wrapper " + (isGoingDown ? 'transition--out reverse' : 'transition--in')}>{this.pageComponents[newPage]}</div>
                    <div className={"transition--wrapper " + (isGoingDown ? 'transition--in reverse' : 'transition--out')}>{this.pageComponents[oldPage]}</div>

                </div>
            </div>
        )
    };

    endTransition(){
        this.currentPage = this.nextPage;
        this.forceUpdate()
    }


    render(){ 
        if (this.props.location.pathname === '/'){
            this.currentPage = 'intro'
            return <Intro pages={this.pages} endIntro={this.endIntro} />
        }

         else return this.getPage(this.props.location.pathname.slice(1))
    }
}

ReactDOM.render(<App />, document.getElementById('app'))