import React from "react";
import styled from "styled-components";

const MainStyled = styled.div`
	padding: ${(props) => props.theme.padding.sm};
`;

const Main = (props) => {
	const { children } = props;

	return <MainStyled>{children}</MainStyled>;
};

export default Main;
