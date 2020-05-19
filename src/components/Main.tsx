import React from "react";
import styled from "styled-components";

const MainStyled = styled.div`
	padding: ${(props) => props.theme.padding.sm};
`;

const Main = ({ children }) => {
	return <MainStyled>{children}</MainStyled>;
};

export default Main;
