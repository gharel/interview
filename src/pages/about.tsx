import Head from "next/head";
import React from "react";

import Layout from "../components/Layout";
import { withTranslation } from "../server/i18n";

function About({ t }) {
	return (
		<Layout>
			<Head>
				<title>{t("About")} | MyCE</title>
			</Head>
			<main>{t("About")}</main>
		</Layout>
	);
}

About.getInitialProps = async () => ({
	namespacesRequired: ["translations"],
});

export default withTranslation()(About);
