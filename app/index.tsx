import ReactDOM from 'react-dom/client';
import Intro from './components-intro/Intro';
import Navigation from './components/Navigation';
import {
	BrowserRouter,
	Navigate,
	Route,
	Routes,
	useLocation,
	useNavigate
} from 'react-router';
import { useState } from 'react';
import { NavBarState } from './components/navBarState';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';

export default function App() {
	return (
		<BrowserRouter>
			<PortfolioApp />
		</BrowserRouter>
	);
}

const pages = ['about', 'projects', 'contact'];
const allPages = pages.concat('intro');

const pageComponents: Record<string, React.JSX.Element> = {
	about: <About />,
	projects: <Projects />,
	contact: <Contact />,
	intro: <></>
};

function PortfolioApp() {
	const location = useLocation();
	const navigate = useNavigate();

	const [navBarState, setNavBarState] = useState<NavBarState>(
		pages.includes(location.pathname.slice(1))
			? NavBarState.Show
			: NavBarState.Hidden
	);

	function getPreviousPage(): string | undefined {
		const previousPage = location.state?.previousPage?.slice(1);
		if (!previousPage || previousPage === location.pathname) return undefined;

		setTimeout(() => navigate(location.pathname, { state: {} }), 600);
		return previousPage;
	}

	const previousPage = getPreviousPage() ?? '';

	const isGoingDown =
		allPages.indexOf(location.pathname.slice(1)) > allPages.indexOf(previousPage);

	return (
		<div className="main row flex-column flex-lg-row">
			<Navigation pages={pages} navBarState={navBarState} />
			<div id="transition" className="col">
				<div
					className={
						'transition--wrapper ' +
						(previousPage &&
							(isGoingDown ? 'transition--out reverse' : 'transition--in'))
					}
				>
					<Routes>
						{Object.entries(pageComponents).map(([tab, component]) => (
							<Route path={'/' + tab} key={tab} element={component} />
						))}
						<Route
							path="/"
							element={
								<Intro
									navIn={() => setNavBarState(NavBarState.Animate)}
									endIntro={() =>
										navigate('about', { state: { previousPage: '/intro' } })
									}
								/>
							}
						/>
						<Route path="/*" element={<Navigate to={'/'} />} />
					</Routes>
				</div>
				{previousPage && (
					<div
						className={
							'transition--wrapper ' +
							(isGoingDown ? 'transition--in reverse' : 'transition--out')
						}
					>
						{pageComponents[previousPage]}
					</div>
				)}
			</div>
		</div>
	);
}

ReactDOM.createRoot(document.getElementById('app')!).render(<App />);
