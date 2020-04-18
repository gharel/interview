import React from "react";
import styled from "styled-components";

import THEME from "../theme/Theme";
import Logo from "./Logo";
import Menu from "./Menu";

const Header = styled.header`
	display: flex;
	justify-content: space-between;
	background: ${THEME.colors.black};
`;

export default () => {
	return (
		<Header>
			<Logo />
			<Menu />
		</Header>
	);
};
