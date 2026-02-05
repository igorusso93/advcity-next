const { spawn } = require("child_process");
const path = require("path");

const nodeBin = process.execPath;
const nextCli = path.join(__dirname, "node_modules", "next", "dist", "bin", "next");

// Passenger/Plesk devono passare PORT. Se non c'è, lascia che il sistema scelga una porta libera.
const port = process.env.PORT ? Number(process.env.PORT) : 0;

const args = [nextCli, "start", "-H", "0.0.0.0"];
if (port !== 0) args.push("-p", String(port));

const child = spawn(nodeBin, args, { stdio: "inherit", env: process.env });
child.on("close", (code) => process.exit(code));
