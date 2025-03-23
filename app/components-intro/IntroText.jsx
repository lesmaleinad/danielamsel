import React from 'react';

export default function IntroText(props) {
	return (
		<span className={'introText'}>
			<span className={props.highlight ? 'highlight' : ''}>{props.text}</span>
			{props.cursor}
			<br></br>
		</span>
	);
}
