const { spawn } = require("child_process");
const path = require("path");

if (!process.env.PORT) {
  console.error("ERROR: PORT env var is missing (Passenger should provide it).");
  process.exit(1);
}

const port = Number(process.env.PORT);
const nodeBin = process.execPath;
const nextCli = path.join(__dirname, "node_modules", "next", "dist", "bin", "next");

const child = spawn(
  nodeBin,
  [nextCli, "start", "-p", String(port), "-H", "0.0.0.0"],
  { stdio: "inherit", env: process.env }
);

child.on("close", (code) => process.exit(code));
