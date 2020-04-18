import React from "react";
import { withTranslation } from "../server/i18n";
import Layout from "../components/Layout";

export const config = { amp: "hybrid" };

function Home({ t }) {
	return (
		<Layout>
			<main>{t("translations:Home")}</main>
		</Layout>
	);
}

Home.getInitialProps = async () => ({
	namespacesRequired: ["translations"],
});

export default withTranslation()(Home);
