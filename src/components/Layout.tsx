import React from 'react';
import styled from 'styled-components'
import {AtlaskitThemeProvider} from '@atlaskit/theme';

import Header from "./Header";

const Page = styled.div`
	display: flex;
	flex-direction: row;
	min-height: 100vh;
`;

const Layout = props => {
	return (
		<AtlaskitThemeProvider mode="dark">
			<Page>
				<Header/>
				{props.children}
			</Page>
		</AtlaskitThemeProvider>
	);
};


export default Layout;
