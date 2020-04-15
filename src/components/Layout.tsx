import React from "react";
import styled from "styled-components";
import { Reset } from "styled-reset";

import Header from "./Header";
import Footer from "./Footer";

const Page = styled.div`
	background: #111;
	color: #ccc;
	font-family: sans-serif;
	display: grid;
	grid-template-rows: max-content 1fr max-content;
	min-height: 100vh;
`;

const Layout = (props) => {
	const { children } = props;
	return (
		<Page>
			<Reset />
			<Header />
			{children}
			<Footer />
		</Page>
	);
};

export default Layout;
