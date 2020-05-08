import { withRouter } from "next/router";
import React from "react";
import styled from "styled-components";

import { Link } from "../server/i18n";

const LinkStyled = styled.a`
	display: inline-block;
	padding: calc(${(props) => props.theme.padding.sm} / 2);
	font-size: 1.6rem;
	font-weight: 100;
	color: ${(props) => props.theme.colors.primary};
	text-decoration: none;
	text-transform: uppercase;
	transition: color ${(props) => props.theme.transition.duration.sm};
	&::after {
		position: relative;
		top: 0.5rem;
		display: block;
		width: 0;
		height: 1px;
		margin: 0 auto;
		content: "";
		background: ${(props) => props.theme.colors.primary};
		transition: width ${(props) => props.theme.transition.duration.xs};
	}
	&:hover {
		color: ${(props) => props.theme.colors.secondary};
		&::after {
			background-color: ${(props) => props.theme.colors.secondary};
		}
	}
	&:active,
	&.is-active {
		&::after {
			width: 100%;
		}
	}
`;

const NavLink = (props) => {
	const { href, children, router } = props;
	return (
		<li>
			<Link href={href} passHref>
				<LinkStyled
					className={`NavLink ${
						router.pathname === href ? "is-active" : ""
					}`}
				>
					{children}
				</LinkStyled>
			</Link>
		</li>
	);
};
export default withRouter(NavLink);
