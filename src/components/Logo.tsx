import React from "react";
import styled from "styled-components";
import THEME from "./Theme";

const Logo = styled.a`
	display: inline-block;
	padding: ${THEME.padding.sm};
	font-size: 2rem;
	font-weight: 700;
	color: ${THEME.colors.primary};
	text-decoration: none;
	text-transform: uppercase;
	transition: color ${THEME.transition.duration};
	&:hover {
		color: ${THEME.colors.secondary};
	}
`;

export default () => <Logo href="/">Interview</Logo>;
