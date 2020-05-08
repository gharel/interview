import Head from "next/head";
import React from "react";
import styled from "styled-components";
import { Reset } from "styled-reset";

import Footer from "./Footer";
import GlobalStyle from "./GlobalStyle";
import Header from "./Header";
import Main from "./Main";

const DivStyled = styled.div`
	display: grid;
	min-height: 100vh;
	font-weight: 100;
	color: ${(props) => props.theme.colors.body.fg};
	background: ${(props) => props.theme.colors.body.bg};
	grid-template-rows: min-content 1fr min-content;
`;

const Layout = (props) => {
	const { children } = props;

	return (
		<>
			<Head>
				<title>MyCE</title>
				<meta
					name="viewport"
					content="initial-scale=1.0, width=device-width"
				/>
				<meta
					name="description"
					content="A PWA to provide offers for CE"
				/>
			</Head>
			<Reset />
			<GlobalStyle />
			<DivStyled>
				<Header />
				<Main>{children}</Main>
				<Footer />
			</DivStyled>
		</>
	);
};

export default Layout;
