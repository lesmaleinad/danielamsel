import React from 'react';
import {NavLink} from 'react-router-dom'

export default class Navigation extends React.Component {
    render(){
        return (
            <nav className={(!this.props.navOut ? 'intro--hold' : undefined)}>
                <div className={'nav row flex-row justify-content-around flex-lg-column nav-pills '} id="nav-tab" role='tablist'>
                    <img className="nav__img"  src="public\images\me.png" alt="A picture of Daniel Amsel"/>
                    <h1 className="header-2 col-12 col-lg mt-lg-3">{this.props.header}</h1>
                    {
                        this.props.pages.map((tab, i) => (
                            <NavLink
                                to = {`/${tab.toLowerCase()}`}
                                className = {"nav-item nav-link "  + (this.props.intro ? (tab !== 'HIDDEN') ? 'introFade' : 'hidden' : undefined)}
                                key={i}
                                id={`nav--${tab}`}
                            > {tab} </NavLink>
                        ))
                    }
                </div>
            </nav>
        )
    }
}