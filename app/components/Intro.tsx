import { useEffect, useState } from 'react';

interface IntroProps {
	navIn: () => void;
	endIntro: () => void;
}

const Intro = (props: IntroProps) => {
	const [currentText, setCurrentText] = useState('');
	const [highlight, setHighlight] = useState(false);

	const text = 'Hello, world!\nMy name is Daniel Amsel.';

	function getKeyTime(char: string, nextChar: string) {
		const currentOffsets: Record<string, number> = {
			' ': 35
		};
		const nextOffsets: Record<string, number> = {
			',': 100,
			D: 250,
			A: 250,
			'.': 300,
			'\n': 500
		};

		return (
			65 +
			Math.random() * 12 +
			(currentOffsets[char] ?? 0) +
			(nextOffsets[nextChar] ?? 0)
		);
	}

	function handleNextText() {
		const currentChar = text[currentText.length - 1] ?? '';
		const nextChar = text[currentText.length];
		if (nextChar === undefined) {
			setTimeout(props.navIn, 100);
			setTimeout(() => setHighlight(true), 600);
			setTimeout(() => setCurrentText(''), 1000);
			setTimeout(props.endIntro, 1100);
		} else {
			const keyTime = getKeyTime(currentChar, nextChar);
			setTimeout(() => {
				setCurrentText((currentText) => currentText + nextChar);
			}, keyTime);
		}
	}

	useEffect(() => {
		handleNextText();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [currentText]);

	return (
		<div className="main row flex-column flex-lg-row">
			<div id="intro">
				<span className={'introText' + (highlight ? ' highlight' : '')}>
					{currentText}
					{!highlight && <span className="blink">|</span>}
				</span>
			</div>
		</div>
	);
};

export default Intro;
