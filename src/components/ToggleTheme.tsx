import { Moon, Sun } from "css.gg/icons/all";
import React from "react";
import styled from "styled-components";
import useDarkMode from "use-dark-mode";

const LinkStyled = styled.a`
	display: inline-block;
	padding: ${(props) => props.theme.padding.sm};
	font-size: 1.6rem;
	color: ${(props) => props.theme.colors.primary};
	text-transform: uppercase;
	vertical-align: baseline;
	cursor: pointer;
	&:hover {
		color: ${(props) => props.theme.colors.secondary};
	}
`;

const ToggleTheme = () => {
	const darkMode = useDarkMode(true);

	return (
		<LinkStyled onClick={darkMode.toggle}>
			{darkMode.value ? <Moon /> : <Sun />}
		</LinkStyled>
	);
};

export default ToggleTheme;
