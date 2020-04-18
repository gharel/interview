import React from "react";
import Layout from "../components/Layout";

export const config = { amp: "hybrid" };

function Custom404() {
	return (
		<Layout>
			<main>Error 404 - Page not found</main>
		</Layout>
	);
}

export default Custom404;
