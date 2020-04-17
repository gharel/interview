import React from "react";
import styled from "styled-components";
import THEME from "../theme/Theme";

const Link = styled.a`
	display: inline-block;
	padding: calc(${THEME.padding.sm} / 2);
	font-size: 1.6rem;
	font-weight: 100;
	color: ${THEME.colors.primary};
	text-decoration: none;
	text-transform: uppercase;
	transition: color ${THEME.transition.duration.sm};
	&::after {
		position: relative;
		top: 0.5rem;
		display: block;
		width: 0;
		height: 1px;
		margin: 0 auto;
		content: "";
		background: ${THEME.colors.primary};
		transition: width ${THEME.transition.duration.xs};
	}
	&:hover {
		color: ${THEME.colors.secondary};
		&::after {
			background-color: ${THEME.colors.secondary};
		}
	}
	&:active {
		&::after {
			width: 100%;
		}
	}
`;

const List = styled.ul`
	display: inline-flex;
	padding: calc(${THEME.padding.sm} / 2);
	list-style: none;
`;

export default () => {
	return (
		<nav>
			<List>
				<li>
					<Link href="/">Home</Link>
				</li>
				<li>
					<Link href="/about">About</Link>
				</li>
			</List>
		</nav>
	);
};
