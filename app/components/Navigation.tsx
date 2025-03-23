import { NavLink, useLocation } from 'react-router';
import { NavBarState } from './navBarState';

interface Props {
	navBarState: NavBarState;
	pages: readonly string[];
}

export default function Navigation({ navBarState, pages }: Props) {
	const location = useLocation();
	return (
		<nav className={navBarState}>
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
				{pages.map((tab) => (
					<NavLink
						to={`/${tab.toLowerCase()}`}
						state={{ previousPage: location.pathname }}
						className={'nav-item nav-link '}
						key={tab}
						id={`nav--${tab}`}
					>
						{tab}
					</NavLink>
				))}
			</div>
		</nav>
	);
}
