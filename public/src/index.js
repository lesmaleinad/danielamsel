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
                        {newPage}
                    </div>
                    
                )
            } else {
               return this.startTransition(page, this.currentPage)

            }
        }
    };

    startTransition(newPage, oldPage){
        this.nextPage = newPage;
        setTimeout(this.endTransition, 600)
        return (
            <div className = "main row flex-column flex-lg-row">
                <Navigation pages={this.pages} header='Daniel Amsel' intro={false}/>
                <div className="transition col row flex-column">
                    <div className="transition--wrapper transition--in">{this.pageComponents[newPage]}</div>
                    {React.cloneElement(this.pageComponents[oldPage], {transition: 'transition--out'})}
                </div>
            </div>
        )
    };

    endTransition(){
        this.currentPage = this.nextPage;
        this.forceUpdate()
    }


    render(){ 

        return (this.props.location.pathname === '/') ? <Intro pages={this.pages} endIntro={this.endIntro} />

        : this.getPage(this.props.location.pathname.slice(1))
    }
}

ReactDOM.render(<App />, document.getElementById('app'))