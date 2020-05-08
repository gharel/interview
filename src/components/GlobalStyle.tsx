import { createGlobalStyle } from "styled-components";

import { THEME } from "../theme/Theme";

const GlobalStyle = createGlobalStyle`
	html {
		font-size: 62.5%;
	}
	body {
		font-family: ${THEME.font.body};
		font-size: 1.4rem;
		line-height: 1.15;
		-webkit-font-smoothing: antialiased;
	}
`;

export default GlobalStyle;
