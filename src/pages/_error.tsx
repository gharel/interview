import React from "react";
import { NextPageContext } from "next";

const Error = ({ statusCode }) => {
	return (
		<p>
			{statusCode
				? `An error ${statusCode} occurred on server`
				: "An error occurred on client"}
		</p>
	);
};

Error.getInitialProps = ({ res, err }: NextPageContext) => {
	let statusCode = 404;
	if (res) {
		statusCode = res.statusCode;
	} else if (err) {
		statusCode = err.statusCode;
	}
	return { statusCode };
};

export default Error;
