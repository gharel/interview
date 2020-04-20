import React from "react";

import Layout from "../components/Layout";
import { withTranslation } from "../server/i18n";

export const config = { amp: "hybrid" };

function Custom404({ t }) {
	return (
		<Layout>
			<main>
				<p>{t("Error 404 - Page not found")}</p>
			</main>
		</Layout>
	);
}

Custom404.getInitialProps = async () => ({
	namespacesRequired: ["translations"],
});

export default withTranslation()(Custom404);
