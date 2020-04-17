import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { Reset } from "styled-reset";
import THEME from "./Theme";

import Header from "./Header";
import Footer from "./Footer";

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

const Page = styled.div`
	display: grid;
	min-height: 100vh;
	font-weight: 100;
	color: ${THEME.colors.greyLight};
	background: ${THEME.colors.greyDarkest};
	grid-template-rows: min-content 1fr min-content;
`;

const Layout = (props) => {
	const { children } = props;
	return (
		<Page>
			<Reset />
			<GlobalStyle />
			<Header />
			{children}
			<Footer />
		</Page>
	);
};

export default Layout;
