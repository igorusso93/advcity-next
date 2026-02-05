const http = require("http");
const next = require("next");

const port = process.env.PORT;
if (!port) {
  console.error("ERROR: PORT env var is missing (Passenger should provide it).");
  process.exit(1);
}

const app = next({ dev: false });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  http.createServer((req, res) => handle(req, res)).listen(port, "0.0.0.0", () => {
    console.log(`Next.js listening on port ${port}`);
  });
}).catch((err) => {
  console.error("Failed to start Next.js:", err);
  process.exit(1);
});
