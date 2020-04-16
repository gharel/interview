import React from "react";
import styled from "styled-components";
import { VARS } from "./Constants";

const Link = styled.a`
	display: inline-block;
	padding: calc(${VARS.padding.sm} / 2);
	font-size: 1.6rem;
	color: ${VARS.colors.primary};
	text-transform: uppercase;
	text-decoration: none;
	font-weight: 100;
	transition: color ${VARS.transition.duration.sm};
	&::after {
		content: "";
		display: block;
		width: 0;
		height: 1px;
		background: ${VARS.colors.primary};
		margin: 0 auto;
		position: relative;
		top: 0.5rem;
		transition: width ${VARS.transition.duration.xs};
	}
	&:hover {
		color: ${VARS.colors.secondary};
		&::after {
			background-color: ${VARS.colors.secondary};
		}
	}
	&:active {
		&::after {
			width: 100%;
		}
	}
`;

const List = styled.ul`
	list-style: none;
	padding: calc(${VARS.padding.sm} / 2);
	display: inline-flex;
`;

export default () => {
	return (
		<nav>
			<List>
				<li>
					<Link href={"/"}>Home</Link>
				</li>
				<li>
					<Link href={"/about"}>About</Link>
				</li>
			</List>
		</nav>
	);
};
