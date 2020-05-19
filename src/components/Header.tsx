import React from "react";
import styled from "styled-components";

import Logo from "./Logo";
import Menu from "./Menu";

const HeaderStyled = styled.header`
	display: flex;
	justify-content: space-between;
	color: ${(props) => props.theme.colors.header.fg};
	background: ${(props) => props.theme.colors.header.bg};
`;

const Header = () => {
	return (
		<HeaderStyled>
			<Logo />
			<Menu />
		</HeaderStyled>
	);
};

export default Header;
