import React from "react";
import styled from "styled-components";

import { i18n } from "../server/i18n";

const LinkStyled = styled.a`
	padding: ${(props) => props.theme.padding.sm};
	font-size: 1.6rem;
	color: ${(props) => props.theme.colors.primary};
	text-transform: uppercase;
	cursor: pointer;
	&:hover {
		color: ${(props) => props.theme.colors.secondary};
	}
`;

const ToggleLang = () => {
	return (
		<LinkStyled
			onClick={() =>
				i18n.changeLanguage(i18n.language === "fr" ? "en" : "fr")
			}
		>
			{i18n.language}
		</LinkStyled>
	);
};

export default ToggleLang;
