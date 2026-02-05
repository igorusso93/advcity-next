const { spawn } = require("child_process");
const path = require("path");

const port = process.env.PORT ? Number(process.env.PORT) : 0; // 0 = porta libera automatica
const nodeBin = process.execPath;
const nextCli = path.join(__dirname, "node_modules", "next", "dist", "bin", "next");

const args = ["start", "-H", "0.0.0.0"];
if (port !== 0) args.push("-p", String(port));

const child = spawn(nodeBin, [nextCli, ...args], {
  stdio: "inherit",
  env: process.env,
});

child.on("close", (code) => process.exit(code));
