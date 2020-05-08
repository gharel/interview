import React from "react";
import styled from "styled-components";

import { withTranslation } from "../server/i18n";
import NavLink from "./NavLink";
import ToggleLang from "./ToggleLang";
import ToggleTheme from "./ToggleTheme";

const ListStyled = styled.ul`
	display: inline-flex;
	padding: calc(${(props) => props.theme.padding.sm} / 2);
	list-style: none;
`;

const NavStyled = styled.nav`
	display: inline-flex;
	align-items: center;
`;

const Menu = ({ t }) => {
	return (
		<NavStyled>
			<ListStyled>
				<NavLink href="/">{t("Home")}</NavLink>
				<NavLink href="/about">{t("About")}</NavLink>
			</ListStyled>

			<ToggleLang />
			<ToggleTheme />
		</NavStyled>
	);
};

export default withTranslation()(Menu);
