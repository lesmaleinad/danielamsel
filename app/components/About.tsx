import AboutTool from './AboutTool';

const tools = [
	{
		image: './images/logos/typescript-logo.jpg',
		content: 'Typescript'
	},
	{
		image: './images/logos/kotlin-logo.jpg',
		content: 'Kotlin'
	},
	{
		image: './images/logos/java-logo.jpg',
		content: 'Java'
	},
	{
		image: './images/logos/nodejs-logo.jpg',
		content: 'Node JS'
	},
	{
		image: './images/logos/react-logo.jpg',
		content: 'React'
	},
	{
		image: './images/logos/gradle-logo.jpg',
		content: 'Gradle'
	},
	{
		image: './images/logos/bazel-logo.jpg',
		content: 'Bazel'
	},
	{
		image: './images/logos/jenkins-logo.jpg',
		content: 'Jenkins'
	}
];

const About = () => (
	<div className="about page">
		<h2 className="display-4">About</h2>
		<div className="page__content">
			<div className="page__text">
				<p>
					I am a curious and capable developer, artist, and entrepreneur working as a
					Senior Software Engineer at{' '}
					<a href="https://pos.toasttab.com/">Toast Inc</a>.
				</p>
			</div>

			<hr />

			<div className="page__text">
				<div>
					<p>
						I build efficient and scalable systems in many environements with lots of
						different tools. I'm always eager to learn more!
					</p>
					<div className="about__tools row justify-content-center">
						{tools.map((t, i) => (
							<AboutTool image={t.image} content={t.content} key={i} />
						))}
					</div>
				</div>
			</div>

			<hr />

			<div className="page__text">
				<h3>Education</h3>
				<p>
					I have a <span className="underline">BFA in Theatre</span> from the
					University of Utah, where I worked in acting, directing, writing, and
					project management. I’ve been in dozens of productions, acting as
					everything from a chorus member to the title character. For my senior
					project, I developed a VR app that integrated with an immersive theatre
					piece{' '}
					<a href="https://dailyutahchronicle.com/2017/04/19/student-play-purgatory-provides-experience-danger-safety/">
						that I wrote
					</a>
					.
				</p>
				<h3>Any fun hobbies?</h3>
				<p>
					I love traveling, cooking (I was a sushi chef!), gaming in virtual reality,
					3D printing dungeons and dragons characters, building battle bots, playing
					saxophone, hiking, pickleball, and adding to this list.
				</p>
				<p>
					All of my hobbies are even better when I get to do them with my beautiful
					wife and daughter.
				</p>
				<img
					className="img-thumbnail p-4"
					src="images/me-in-nature.jpg"
					alt="Picture of me and my wife travelling"
				/>
			</div>
		</div>
	</div>
);

export default About;
