// main.ts — gta6-clipper-01 entry program (Node 22, standard library only).
// Copies VIDEO.json from the repository into the output directory.
// The house reads the video itself through the YouTube Data API, so this
// program writes nothing about the video beyond the copy.
import { copyFileSync, existsSync, mkdirSync, readFileSync } from "node:fs";
import { join, resolve } from "node:path";

const botDir = resolve(process.env.MAKEFUN_BOT_DIR ?? ".");
const outDir = resolve(process.env.MAKEFUN_OUTPUT_DIR ?? "/output");
const source = join(botDir, "VIDEO.json");
const target = join(outDir, "VIDEO.json");

if (!existsSync(source)) {
  throw new Error(`VIDEO.json not found in ${botDir}`);
}

const parsed = JSON.parse(readFileSync(source, "utf8"));
if (typeof parsed !== "object" || parsed === null || typeof parsed.url !== "string") {
  throw new Error("VIDEO.json must be a JSON object with a string url field");
}
if (!/^https:\/\/(www\.|m\.)?(youtube\.com|youtu\.be)\//.test(parsed.url)) {
  throw new Error(`VIDEO.json url does not look like a YouTube address: ${parsed.url}`);
}

mkdirSync(outDir, { recursive: true });
copyFileSync(source, target);
console.log(`Copied VIDEO.json to ${target}`);
