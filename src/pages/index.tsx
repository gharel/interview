import React from "react";

import Layout from "../components/Layout";
import { withTranslation } from "../server/i18n";

export const config = { amp: "hybrid" };

function Home({ t }) {
	return (
		<Layout>
			<main>{t("Home")}</main>
		</Layout>
	);
}

Home.getInitialProps = async () => ({
	namespacesRequired: ["translations"],
});

export default withTranslation()(Home);
