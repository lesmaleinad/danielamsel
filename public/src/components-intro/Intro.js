import React from 'react';
import IntroText from './IntroText'
import BlinkCursor from './BlinkCursor'
import Navigation from '../components/Navigation'

export default class Intro extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            texts: [],
            highlight: false,
            navOut: false,
            header : '',
            pages : ['HIDDEN', 'HIDDEN', 'HIDDEN']
        };
        
        this.handleNewText = this.handleNewText.bind(this);
        this.handleNextText = this.handleNextText.bind(this);
        this.finishNextText = this.finishNextText.bind(this);
        this.placeCursor = this.placeCursor.bind(this);
        this.headerTypeOut = this.headerTypeOut.bind(this);
        this.menuTypeOut = this.menuTypeOut.bind(this);
        

        this.introIndex = 0;
        this.nextText = [
            'Hello, world!',
            'My name is Daniel Amsel.'
        ];

        this.cursorClass = '';

        this.headerIndex = 0;
        this.headerText = 'Daniel Amsel';

        this.pages = this.props.pages.slice();
        this.pageIndex = 0;
    }

    handleNewText(newText, index){

        if (!this.state.texts[index]){
            this.state.texts.push([]);
        };

        this.setState(() => (
           this.state.texts[index] += newText
        ))
        
    };

    handleNextText(){

        let keyTime =  85 + Math.random() * 15;

        if (!this.nextText[this.introIndex]){
            this.introIndex++;
        }

        let str = this.nextText[this.introIndex]

        if (str){

            const nextText = str.slice(0,1);
            this.nextText[this.introIndex] = str.slice(1)

                if(nextText === ' ')                             {keyTime+=35}

                if(str.slice(1,2) === ',')                       {keyTime+=100}

                if(str.slice(1,2) === 'D' 
                || str.slice(1,2) === 'A')                       {keyTime+=300}

                if (str.slice(1,2) === '.')                      {keyTime+=300}

                if(this.nextText[this.introIndex].length === 0)  {keyTime+=600}

            this.cursorClass = ( keyTime>500 ) ? 'blink' : '';

            this.handleNewText(nextText, this.introIndex);

            setTimeout(this.handleNextText, keyTime)
        } 
        
        else {

            this.setState(()=>({navOut : true}))
            setTimeout(this.headerTypeOut, 500)

        }

    };

    finishNextText(){

        this.cursorClass = 'hidden';

        this.setState(()=>({highlight: true}));

        setTimeout(()=>{this.props.endIntro()}, 300)
        
    }

    placeCursor(text){
        if (text === this.state.texts[this.state.texts.length - 1]){
            return <BlinkCursor cursorClass={this.cursorClass} />
        }
    }

    headerTypeOut(){
        let keyTime =  85;

        let str = this.headerText[this.headerIndex]

        if (str){

            this.headerIndex++;

            this.setState((prevState)=>({header: prevState.header+str}))

            setTimeout(this.headerTypeOut, keyTime)
        } 
        
        else {

            setTimeout(this.menuTypeOut, 0)

        }
    }

    menuTypeOut(){

        if (this.pages[this.pageIndex]){

            const nextPages = this.state.pages.slice();

            nextPages.splice(this.pageIndex, 1, this.pages[this.pageIndex]);

            this.pageIndex++;

            setTimeout(this.menuTypeOut, 300);

            this.setState(()=>({pages: nextPages}));
        }

        else {setTimeout(this.finishNextText, 50)}
        
    };

    componentDidMount(){
        this.handleNextText()
    };

    render(){
        return (
            <div className="main row flex-column flex-lg-row">
                <Navigation pages={this.state.pages} header={this.state.header} intro={true} navOut={this.state.navOut}/>
                <div id="intro" className=''>
                    {
                        this.state.texts.map((introText, key) => (
                            <IntroText 
                                text={introText} 
                                key={key} 
                                cursor={this.placeCursor(introText)}
                                highlight={this.state.highlight}
                            />))
                    }
                </div>
            </div>
        )
    }
}