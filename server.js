const { spawn } = require("child_process");

const port = process.env.PORT || 3000;

const child = spawn(
  process.platform === "win32" ? "npx.cmd" : "npx",
  ["next", "start", "-p", String(port), "-H", "0.0.0.0"],
  {
    stdio: "inherit",
    env: process.env,
  }
);

child.on("close", (code) => {
  process.exit(code);
});
