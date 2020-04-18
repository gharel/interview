import { NextPageContext } from "next";
import React from "react";

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
