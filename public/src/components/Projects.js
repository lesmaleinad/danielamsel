import React from 'react';

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
							City. Built with Node, JQuery, and Semantic UI.
						</p>
						<a href="http://www.suckerpunchforever.com">www.suckerpunchforever.com</a>
					</div>
				</div>
			</div>

			<div className="codenames project">
				<div className="project__front"></div>
				<div className="project__body">
					<div className="project__inner">
						<h3 className="project__title">Codenames</h3>
						<p>
							Multiplayer card game for four players, with live updates using
							websockets. Built with Node, Socket.io, and Bootstrap.
						</p>
						<a href="http://codenames.danielamsel.com">codenames.danielamsel.com</a>
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
							between 2 nodes. Built with Vanilla JS.
						</p>
						<a href="/pathfinder/path.html">danielamsel.com/pathfinder/path.html</a>
					</div>
				</div>
			</div>

			<div className="danielamsel project">
				<div className="project__front"></div>
				<div className="project__body">
					<div className="project__inner">
						<h3 className="project__title">This Website</h3>
						<p>
							Built with Express, Node, and React for tight response, controlled
							animation, and fast loading.
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
);

export default Projects;
