import React from 'react';

const AboutTool = (props) => (
	<div className={`about__tool ${props.name} col-6 col-sm-4`}>
		<img src={props.image}></img>
		<div className={`name`}>
			<span>{props.content}</span>
		</div>
	</div>
);

export default AboutTool;
