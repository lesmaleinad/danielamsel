interface Props {
	image: string;
	content: string;
}

const AboutTool = (props: Props) => (
	<div className={`about__tool col-6 col-sm-4`}>
		<img src={props.image}></img>
		<div className="name">
			<span>{props.content}</span>
		</div>
	</div>
);

export default AboutTool;
