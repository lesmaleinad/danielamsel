const Projects = () => (
	<div className="projects page">
		<h2 className="display-4">Projects</h2>
		<div className="page__text">
			<div className="suckerpunch project">
				<div className="project__front"></div>
				<div className="project__body">
					<div className="project__inner">
						<h3 className="project__title">Suckerpunch</h3>
						<p>
							Website for my experimental research theatre group based in Salt Lake
							City.
						</p>
						<a href="https://www.suckerpunchforever.com">
							www.suckerpunchforever.com
						</a>
					</div>
				</div>
			</div>

			<div className="codenames project">
				<div className="project__front"></div>
				<div className="project__body">
					<div className="project__inner">
						<h3 className="project__title">Codenames</h3>
						<p>
							Multiplayer card game for four players, with live updates using WebRTC.
						</p>
						<a href="#">WORK IN PROGRESS</a>
					</div>
				</div>
			</div>

			<div className="pathfinder project">
				<div className="project__front"></div>
				<div className="project__body">
					<div className="project__inner">
						<h3 className="project__title">PathFinder</h3>
						<p>
							Simple application implementing Dijkstra's algorithm for finding a path
							between 2 nodes. Built with vanilla JS.
						</p>
						<a href="https://pathfinder.danielamsel.com">
							pathfinder.danielamsel.com
						</a>
					</div>
				</div>
			</div>

			<div className="danielamsel project">
				<div className="project__front"></div>
				<div className="project__body">
					<div className="project__inner">
						<h3 className="project__title">This Website</h3>
						<p>Built with Typescript, React, and Vite.</p>
					</div>
				</div>
			</div>
		</div>
	</div>
);

export default Projects;
