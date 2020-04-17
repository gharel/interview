import React from "react";
import Head from "next/head";
import styled, { createGlobalStyle } from "styled-components";
import { Reset } from "styled-reset";
import THEME from "../theme/Theme";

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
			<Head>
				<title>Interview</title>
				<meta
					name="viewport"
					content="initial-scale=1.0, width=device-width"
				/>
				<meta
					name="description"
					content="A PWA to provide questions and quiz to esaly interviewing people"
				/>
			</Head>
			<Reset />
			<GlobalStyle />
			<Header />
			{children}
			<Footer />
		</Page>
	);
};

export default Layout;
