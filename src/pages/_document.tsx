import Document, { Head, Html, Main, NextScript } from "next/document";
import React from "react";

import { i18n } from "../server/i18n";

class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx);
		return { ...initialProps };
	}

	render() {
		console.log(i18n.language);

		return (
			<Html lang={i18n.language}>
				<Head />
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
