import React from "react";
import styled from "styled-components";
import { i18n, withTranslation } from "../server/i18n";
import NavLink from "./NavLink";
import THEME from "../theme/Theme";

const List = styled.ul`
	display: inline-flex;
	padding: calc(${THEME.padding.sm} / 2);
	list-style: none;
`;

const LangChanger = styled.a`
	padding: ${THEME.padding.sm};
	font-size: 1.6rem;
	color: ${THEME.colors.primary};
	text-transform: uppercase;
	cursor: pointer;
	&:hover {
		color: ${THEME.colors.secondary};
	}
`;

function Menu({ t }) {
	return (
		<nav>
			<List>
				<NavLink href="/">{t("Home")}</NavLink>
				<NavLink href="/about">{t("About")}</NavLink>
			</List>

			<LangChanger
				onClick={() =>
					i18n.changeLanguage(i18n.language === "fr" ? "en" : "fr")
				}
			>
				{i18n.language}
			</LangChanger>
		</nav>
	);
}

export default withTranslation()(Menu);
