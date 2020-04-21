import compression from "compression";
import express, { Request, Response } from "express";
import fs from "fs";
import http from "http";
import next from "next";
import nexti18nextMiddleware from "next-i18next/middleware";
import spdy from "spdy";

import nexti18next from "./i18n";

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
const port = 80;
const portSecure = 443;

// create your own certificate with openssl for development
const options = {
	key: fs.readFileSync(`${__dirname}/ssl.private.key`),
	cert: fs.readFileSync(`${__dirname}/ssl.certificate.crt`),
};

const shouldCompress = (req, res) => {
	// don't compress responses asking explicitly not
	if (req.headers["x-no-compression"]) {
		return false;
	}

	return compression.filter(req, res);
};

(async () => {
	try {
		// create the express app
		await app.prepare();
		const server = express();

		await nexti18next.initPromise;

		// set up compression in express
		server
			.use(nexti18nextMiddleware(nexti18next))
			.use(compression({ filter: shouldCompress }));

		// fallback all request to next request handler
		server.all("*", (req: Request, res: Response) => {
			if (!req.secure) {
				// request was via http, so redirect to https
				res.redirect(`https://${req.headers.host}${req.url}`);
			}

			// request was via https, so do no special handling
			return handle(req, res);
		});

		// Handle non secure server
		http.createServer({}, server).listen(80, (err?: Error) => {
			if (err) throw err;
		});

		// start the HTTP/2 server with express
		spdy.createServer(options, server).listen(portSecure, (err?: Error) => {
			if (err) throw err;
			const env = process.env.NODE_ENV.trim();
			// eslint-disable-next-line no-console
			console.log(
				`> \x1b[32mReady:\x1b[0m https://localhost:${port} (env: ${env})`
			);
		});
	} catch (e) {
		console.error(e); // eslint-disable-line no-console
		process.exit(1);
	}
})();
