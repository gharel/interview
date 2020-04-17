import express, { Request, Response } from "express";
import next from "next";

import compression from "compression";
import spdy from "spdy";
import path from "path";
import fs from "fs";

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
const port = process.env.PORT || 3000;

// create your own certificate with openssl for development
const options = {
	key: fs.readFileSync(path.join(__dirname, "/ssl.private.key")),
	cert: fs.readFileSync(path.join(__dirname, "/ssl.certificate.crt")),
};

const shouldCompress = (req, res) => {
	// don't compress responses asking explicitly not
	if (req.headers["x-no-compression"]) {
		return false;
	}

	// use compression filter function
	return compression.filter(req, res);
};

(async () => {
	try {
		// create the express app
		await app.prepare();
		const server = express();

		// set up compression in express
		server.use(compression({ filter: shouldCompress }));

		// declaring routes for our pages
		server.get("/", (req: Request, res: Response) => {
			return app.render(req, res, "/");
		});
		server.get("/about", (req: Request, res: Response) => {
			return app.render(req, res, "/about");
		});

		// fallback all request to next request handler
		server.all("*", (req: Request, res: Response) => {
			return handle(req, res);
		});

		// start the HTTP/2 server with express
		spdy.createServer(options, server).listen(port, (err?: Error) => {
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
