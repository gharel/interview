import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { Reset } from "styled-reset";
import { VARS } from "./Constants";

import Header from "./Header";
import Footer from "./Footer";

const GlobalStyle = createGlobalStyle`
	html {
		font-size: 62.5%;
	}
	body {
		font-family: ${VARS.font.family};
		font-size: 1.4rem;
		line-height: 1.15;
	}
`;

const Page = styled.div`
	background: ${VARS.colors.greyDarkest};
	color: ${VARS.colors.greyLight};
	display: grid;
	grid-template-rows: min-content 1fr min-content;
	min-height: 100vh;
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
