import React from "react";
import styled from "styled-components";
import { AtlaskitThemeProvider } from "@atlaskit/theme";

import Header from "./Header";

const Page = styled.div`
	display: flex;
	flex-direction: row;
	min-height: 100vh;
`;

const Layout = (props) => {
	const { children } = props;
	return (
		<AtlaskitThemeProvider mode="dark">
			<Page>
				<Header />
				{children}
			</Page>
		</AtlaskitThemeProvider>
	);
};

export default Layout;
