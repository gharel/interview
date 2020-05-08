import App from "next/app";
import React, { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import useDarkMode from "use-dark-mode";

import { appWithTranslation } from "../server/i18n";
import { DARKTHEME, LIGHTTHEME } from "../theme/Theme";

const MyApp = ({ Component, pageProps }) => {
	const [isMounted, setIsMounted] = useState(false);
	const darkMode = useDarkMode(true);
	const theme = darkMode.value ? DARKTHEME : LIGHTTHEME;

	useEffect(() => {
		setIsMounted(true);
	}, []);

	return (
		<ThemeProvider theme={theme}>
			{isMounted && <Component {...pageProps} />}
		</ThemeProvider>
	);
};

MyApp.getInitialProps = async (appContext) => {
	const appProps = await App.getInitialProps(appContext);
	return { ...appProps };
};

export default appWithTranslation(MyApp);
