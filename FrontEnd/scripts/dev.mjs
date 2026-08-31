import { spawn } from "node:child_process";
import { realpathSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// Windows preserves the casing typed in `cd`. Normalize it before Next builds
// the Webpack module graph, so `FrontEnd` and `frontend` cannot become
// separate copies of the App Router runtime.
const scriptsDirectory = dirname(fileURLToPath(import.meta.url));
const projectDirectory = realpathSync.native(join(scriptsDirectory, ".."));
const nextCli = join(projectDirectory, "node_modules", "next", "dist", "bin", "next");

const nextProcess = spawn(
  process.execPath,
  [nextCli, "dev", "--webpack", ...process.argv.slice(2)],
  {
    cwd: projectDirectory,
    stdio: "inherit",
  }
);

for (const signal of ["SIGINT", "SIGTERM"]) {
  process.on(signal, () => nextProcess.kill(signal));
}

nextProcess.on("error", (error) => {
  console.error("Unable to start the Next.js development server:", error);
  process.exitCode = 1;
});

nextProcess.on("exit", (code, signal) => {
  if (signal) {
    process.kill(process.pid, signal);
    return;
  }

  process.exitCode = code ?? 1;
});
