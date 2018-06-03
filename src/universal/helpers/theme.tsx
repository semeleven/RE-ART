// import React from 'react';
// import { ThemeProvider } from 'react-fela'
//
// interface Props {
// 	children: JSX.Element
// 	overwrite?: boolean
// 	theme: object
// }

const theme: object = {
	white: '#ffffff',
	black: '#000000',
	lighterGray: '#707070',
	darkGray: '#16111C',
	purple: '#6C5FC7',
	darkPurple: '#5346AE',
};

// const ThemeProvider: React.SFC<Props> = ({ children, overwrite = false }) => (
// 	<ThemeProvider overwrite={overwrite} theme={theme}>
// 		{children}
// 	</ThemeProvider>
// );

export default theme;