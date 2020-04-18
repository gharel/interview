import React from "react";
import { NextPageContext } from "next";

const Error = ({ statusCode }) => {
	return (
		<p>{statusCode ? `Server's error ${statusCode}` : "Client's error"}</p>
	);
};

Error.getInitialProps = async ({ res, err }: NextPageContext) => {
	let statusCode = 404;
	if (res) {
		statusCode = res.statusCode;
	} else if (err) {
		statusCode = err.statusCode;
	}
	return { statusCode };
};

export default Error;
