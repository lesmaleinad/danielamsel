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
            navIn: false
        };
        
        this.handleNewText = this.handleNewText.bind(this);
        this.handleNextText = this.handleNextText.bind(this);
        this.finishNextText = this.finishNextText.bind(this);
        this.placeCursor = this.placeCursor.bind(this);
        this.navFloatIn = this.navFloatIn.bind(this);
        this.highlightText = this.highlightText.bind(this);
        // this.headerTypeOut = this.headerTypeOut.bind(this);
        // this.menuTypeOut = this.menuTypeOut.bind(this);
        

        this.introCharIndex = 0;
        this.introLineIndex = 0;
        this.nextText = [
            'Hello, world!',
            'My name is Daniel Amsel.'
        ];

        this.cursorClass = '';

        // this.headerIndex = 0;
        // this.headerText = 'Daniel Amsel';

        // this.pages = this.props.pages.slice();
        // this.pageIndex = 0;
    }

    handleNewText(newText, index){

        this.setState(() => {
            if (!this.state.texts[index]){
                this.state.texts.push([]);
            };
            return this.state.texts[index] += newText
           
        })
        
    };

    handleNextText(){

        let keyTime =  65 + Math.random() * 12;

        if (!this.nextText[this.introLineIndex][this.introCharIndex]){
            this.introLineIndex++;
            this.introCharIndex = 0;
        }

        let str = this.nextText[this.introLineIndex]

        if (str){

            const char = str[this.introCharIndex];
            const nextChar = str[this.introCharIndex + 1];

                if(char === ' ')         {keyTime+=35}

                if(nextChar === ',')     {keyTime+=100}

                if(nextChar === 'D' 
                || nextChar === 'A')     {keyTime+=250}

                if (nextChar === '.')    {keyTime+=300}

                if (!!nextChar === false){keyTime+=500}

            this.cursorClass = ( keyTime>500 ) ? 'blink' : '';

            this.handleNewText(char, this.introLineIndex);

            this.introCharIndex++

            setTimeout(this.handleNextText, keyTime)            
        } 
        
        else {

            setTimeout(this.navFloatIn, 50)
            setTimeout(this.highlightText, 500)
            setTimeout(this.finishNextText, 1000)
            setTimeout(this.props.endIntro, 1500)

        }

    };

    navFloatIn(){
        this.setState(()=>({navIn: true}))
 
    }

    highlightText(){
        this.cursorClass = 'hidden';
        this.setState(()=>({highlight: true}));        
    }

    finishNextText(){
        this.setState(()=>({texts: []}))        
    }

    placeCursor(text){
        if (text === this.state.texts[this.state.texts.length - 1]){
            return <BlinkCursor cursorClass={this.cursorClass} />
        }
    }

    // headerTypeOut(){
    //     let keyTime =  85;

    //     let str = this.headerText[this.headerIndex]

    //     if (str){

    //         this.headerIndex++;

    //         this.setState((prevState)=>({header: prevState.header+str}))

    //         setTimeout(this.headerTypeOut, keyTime)
    //     } 
        
    //     else {

    //         setTimeout(this.menuTypeOut, 0)

    //     }
    // }

    // menuTypeOut(){

    //     if (this.pages[this.pageIndex]){

    //         const nextPages = this.state.pages.slice();

    //         nextPages.splice(this.pageIndex, 1, this.pages[this.pageIndex]);

    //         this.pageIndex++;

    //         setTimeout(this.menuTypeOut, 300);

    //         this.setState(()=>({pages: nextPages}));
    //     }

    //     else {setTimeout(this.finishNextText, 50)}
        
    // };

    componentDidMount(){
        this.handleNextText()
    };

    render(){
        return (
            <div className="main row flex-column flex-lg-row">
                <Navigation pages={this.props.pages} intro={true} navIn={this.state.navIn}/>
                <div id="intro">
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