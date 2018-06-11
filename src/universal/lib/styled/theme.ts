import { lighten, darken } from 'polished';

interface ThemeInterface {
	white: string;
	black: string;
	lighterGray: string;
	darkGray: string;
	purple: string;
	darkPurple: string;
}

const theme = {
	white: '#ffffff',
	black: '#000000',
	lighterGray: '#707070',
	darkGray: '#16111C',
	purple: '#6C5FC7',
	darkPurple: '#5346AE',
	transparent: 'transparent',
};

const background = {
	invertedDark: theme.transparent,
	invertedPurple: theme.transparent,
	dark: theme.darkGray,
	purple: theme.purple,
};

const hoverBackground = {
	invertedDark: theme.darkGray,
	invertedPurple: theme.purple,
	dark: lighten(0.1, theme.darkGray),
	purple: theme.darkPurple,
};

const activeBackground = {
	invertedDark: darken(0.1, theme.darkGray),
	invertedPurple: theme.darkPurple,
	dark: lighten(0.2, theme.darkGray),
	purple: darken(0.1, theme.darkPurple),
};

const color = {
	invertedDark: theme.darkGray,
	invertedPurple: theme.purple,
	dark: theme.white,
	purple: theme.white,
};

const borderColor = {
	invertedDark: theme.darkGray,
	dark: theme.darkGray,
	invertedPurple: theme.purple,
	purple: theme.purple,
};

export { theme, ThemeInterface, background, color, borderColor, hoverBackground, activeBackground };
