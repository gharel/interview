import React from "react";
import styled from "styled-components";
import { VARS } from "./Constants";
import Menu from "./Menu";
import Logo from "./Logo";

const Header = styled.header`
	background: ${VARS.colors.black};
	display: flex;
	justify-content: space-between;
`;

export default () => {
	return (
		<Header>
			<Logo />
			<Menu />
		</Header>
	);
};
