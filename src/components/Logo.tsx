import React from "react";
import styled from "styled-components";
import { VARS } from "./Constants";

const Logo = styled.a`
	display: inline-block;
	padding: ${VARS.padding.sm};
	font-size: 2rem;
	color: ${VARS.colors.primary};
	text-transform: uppercase;
	text-decoration: none;
	font-weight: 700;
	transition: color ${VARS.transition.duration};
	&:hover {
		color: ${VARS.colors.secondary};
	}
`;

export default () => <Logo href={"/"}>Interview</Logo>;
