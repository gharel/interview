import React from "react";

import Layout from "../components/Layout";
import { withTranslation } from "../server/i18n";

export const config = { amp: "hybrid" };

const Home = ({ t }) => {
	return (
		<Layout>
			<div>{t("Home")}</div>
		</Layout>
	);
};

Home.getInitialProps = async () => ({
	namespacesRequired: ["translations"],
});

export default withTranslation()(Home);
