import { spawnSync } from "node:child_process";
import { existsSync } from "node:fs";
import { join } from "node:path";

const basePath = process.env.GITHUB_PAGES_BASE_PATH || "/haryanto-law-profile";
const nextCli = join(process.cwd(), "node_modules", "next", "dist", "bin", "next");

if (!existsSync(nextCli)) {
  console.error("Next.js belum terpasang. Jalankan install dependency terlebih dahulu.");
  process.exit(1);
}

const result = spawnSync(process.execPath, [nextCli, "build"], {
  stdio: "inherit",
  env: {
    ...process.env,
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
});

process.exit(result.status ?? 1);
