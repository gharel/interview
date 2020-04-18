import React from "react";
import Head from "next/head";
import { withTranslation } from "../server/i18n";
import Layout from "../components/Layout";

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
