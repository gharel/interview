import React from "react";
import { withRouter } from "next/router";
import styled from "styled-components";
import { Link } from "../server/i18n";
import THEME from "../theme/Theme";

const LinkStyled = styled.a`
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
