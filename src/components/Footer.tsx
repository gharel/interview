import React from "react";
import styled from "styled-components";

const FooterStyled = styled.footer`
	color: ${(props) => props.theme.colors.footer.fg};
	background: ${(props) => props.theme.colors.footer.bg};
`;

const DivStyled = styled.div`
	padding: ${(props) => props.theme.padding.sm};
`;

export default () => {
	return (
		<FooterStyled>
			<DivStyled>Footer</DivStyled>
		</FooterStyled>
	);
};
