interface Props {
	cursorClass?: string | undefined;
}

export default function BlinkCursor({ cursorClass }: Props) {
	return <span className={cursorClass}>|</span>;
}
