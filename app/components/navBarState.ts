
export const NavBarState = {
	Hidden: 'intro',
	Animate: 'intro--in',
	Show: 'default'
} as const;

export type NavBarState = typeof NavBarState[keyof typeof NavBarState];