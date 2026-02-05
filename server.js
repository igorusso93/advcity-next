const { spawn } = require("child_process");
const path = require("path");

const port = process.env.PORT || 3000;

// Next CLI reale (no npx, no .bin shim)
const nextCli = path.join(__dirname, "node_modules", "next", "dist", "bin", "next");

// Usa il node dell'ambiente (stesso che esegue Passenger)
const nodeBin = process.execPath;

const child = spawn(
  nodeBin,
  [nextCli, "start", "-p", String(port), "-H", "0.0.0.0"],
  { stdio: "inherit", env: process.env }
);

child.on("close", (code) => process.exit(code));
