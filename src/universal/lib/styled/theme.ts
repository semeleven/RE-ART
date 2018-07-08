import { lighten, darken } from 'polished';
import { css } from '../styled';

interface colorsInterface {
	white: string;
	black: string;
	lighterGray: string;
	darkGray: string;
	purple: string;
	darkPurple: string;
	transparent: string;
}

const colors = {
	white: '#ffffff',
	gray: '#e2e2e2',
	black: '#000000',
	lighterGray: '#707070',
	darkGray: '#16111C',
	purple: '#6C5FC7',
	darkPurple: '#5346AE',
	transparent: 'transparent',
};

const background = {
	invertedDark: colors.transparent,
	invertedPurple: colors.transparent,
	dark: colors.darkGray,
	purple: colors.purple,
	disabled: colors.gray,
	loading: colors.gray,
};

const hoverBackground = {
	invertedDark: colors.darkGray,
	invertedPurple: colors.purple,
	dark: lighten(0.1, colors.darkGray),
	purple: colors.darkPurple,
	disabled: colors.gray,
	loading: colors.gray,
};

const activeBackground = {
	invertedDark: lighten(0.1, colors.darkGray),
	invertedPurple: colors.darkPurple,
	dark: lighten(0.15, colors.darkGray),
	purple: darken(0.1, colors.darkPurple),
	disabled: colors.gray,
	loading: colors.gray,
};

const buttonTextColor = {
	invertedDark: colors.darkGray,
	invertedPurple: colors.purple,
	dark: colors.white,
	purple: colors.white,
	disabled: colors.white,
	loading: colors.white,
};

const fontSize = {
	XL: '40px',
	L: '30px',
	M: '17px',
	S: '15px',
};

const headingMargin = {
	XL: '50px',
	L: '20px',
	M: '15px',
	S: '10px',
};

const borderColor = {
	invertedDark: colors.darkGray,
	dark: colors.darkGray,
	invertedPurple: colors.purple,
	purple: colors.purple,
	disabled: colors.gray,
};

const MediaSizes = {
	desktop: 1190,
	tablet: 960,
	mobile: 630,
	small: 320,
};

const media: any = Object.keys(MediaSizes).reduce((acc, label) => {
	acc[label] = (literals: TemplateStringsArray, ...args: any[]) => css`
		@media (max-width: ${MediaSizes[label] / 16}em) {
			${css(literals, ...args)};
		}
	`;

	return acc;
}, {});

export {
	colors,
	colorsInterface,
	background,
	buttonTextColor,
	borderColor,
	hoverBackground,
	activeBackground,
	fontSize,
	headingMargin,
	media,
};
