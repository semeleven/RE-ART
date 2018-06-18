import * as styledComponents from 'styled-components';
import { colorsInterface } from './theme';

const {
	default: styled,
	css,
	injectGlobal,
	keyframes,
	ThemeProvider,
} = styledComponents as styledComponents.ThemedStyledComponentsModule<
	colorsInterface
>;

export { css, injectGlobal, keyframes, ThemeProvider, colorsInterface };
export default styled;
