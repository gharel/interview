import express, { Request, Response } from "express";
import next from "next";

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
const port = process.env.PORT || 3000;

(async () => {
	try {
		await app.prepare();
		const server = express();
		server.all("*", (req: Request, res: Response) => {
			return handle(req, res);
		});
		server.listen(port, (err?: Error) => {
			if (err) throw err;
			const env = process.env.NODE_ENV.trim();
			console.log(
				`> ` +
					`\x1b[32m` +
					`Ready:` +
					`\x1b[0m` +
					` http://localhost:${port} (env: ${env})`
			);
		});
	} catch (e) {
		console.error(e);
		process.exit(1);
	}
})();
