import Head from "next/head";
import React from "react";

import Layout from "../components/Layout";
import { withTranslation } from "../server/i18n";

const About = ({ t }) => {
	return (
		<Layout>
			<Head>
				<title>{t("About")} | MyCE</title>
			</Head>
			<div>{t("About")}</div>
		</Layout>
	);
};

About.getInitialProps = async () => ({
	namespacesRequired: ["translations"],
});

export default withTranslation()(About);
