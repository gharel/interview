import React from "react";
import styled from "styled-components";

const LinkStyled = styled.a`
	display: inline-block;
	padding: ${(props) => props.theme.padding.sm};
	font-size: 2rem;
	font-weight: 700;
	color: ${(props) => props.theme.colors.primary};
	text-decoration: none;
	transition: color ${(props) => props.theme.transition.duration};
	&:hover {
		color: ${(props) => props.theme.colors.secondary};
	}
`;

const Logo = () => {
	return (
		<LinkStyled href="/">
			<span>MyCE</span>
		</LinkStyled>
	);
};

export default Logo;
