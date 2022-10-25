import React from 'react';
import { NavLink } from 'react-router-dom';

export default class Navigation extends React.Component {
	render() {
		return (
			<nav
				className={
					this.props.intro ? (this.props.navIn ? 'intro--in' : 'intro') : undefined
				}
			>
				<div
					className={
						'nav row flex-row justify-content-around flex-lg-column nav-pills '
					}
					id="nav-tab"
					role="tablist"
				>
					<div className="nav__top">
						<img
							className="nav__img"
							src="./images/src/me.jpg"
							alt="A picture of Daniel Amsel"
						/>
						<h1 className="header-2 mt-lg-3">Daniel Amsel</h1>
					</div>
					<hr />
					{this.props.pages.map((tab, i) => (
						<NavLink
							to={`/${tab.toLowerCase()}`}
							className={
								'nav-item nav-link ' +
								(this.props.intro
									? tab !== 'HIDDEN'
										? 'introFade'
										: 'hidden'
									: undefined)
							}
							key={i}
							id={`nav--${tab}`}
						>
							{' '}
							{tab}{' '}
						</NavLink>
					))}
				</div>
			</nav>
		);
	}
}
