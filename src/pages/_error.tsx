import { NextPage, NextPageContext } from "next";
import React from "react";

import Layout from "../components/Layout";
import { ErrorPage } from "../interfaces/Error.d";
import { withTranslation } from "../server/i18n";

const Error: NextPage<ErrorPage.Props, ErrorPage.InitialProps> = ({
	statusCode,
	t,
}) => (
	<Layout>
		<main>
			<p>
				{statusCode
					? t(`Server's error {{statusCode}}`, {
							statusCode,
					  })
					: t("Client's error")}
			</p>
		</main>
	</Layout>
);

Error.getInitialProps = async ({ res, err }: NextPageContext) => {
	const statusCode = res ? res.statusCode : err ? err.statusCode : 404; // eslint-disable-line no-nested-ternary
	return { namespacesRequired: ["translations"], statusCode };
};

export default withTranslation()(Error);
