import React from "react";
import styled from "styled-components";
import THEME from "../theme/Theme";
import NavLink from "./NavLink";

const List = styled.ul`
	display: inline-flex;
	padding: calc(${THEME.padding.sm} / 2);
	list-style: none;
`;

export default () => {
	return (
		<nav>
			<List>
				<NavLink href="/">Home</NavLink>
				<NavLink href="/About">About</NavLink>
			</List>
		</nav>
	);
};
