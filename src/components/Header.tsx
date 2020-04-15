import React from "react";
import styled from "styled-components";
import Menu from "./Menu";
import Logo from "./Logo";

const Header = styled.header`
	background: #000;
`;

export default () => {
	return (
		<Header>
			<Logo />
			<Menu />
		</Header>
	);
};
