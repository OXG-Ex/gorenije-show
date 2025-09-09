import fs from "fs";
import path from "path";
import {fileURLToPath} from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ROOT_DIR = path.join(__dirname, "assets/pictures");
const OUTPUT_DIR = path.join(__dirname, "generated");

function walkDir(dir, callback) {
  fs.readdirSync(dir, {withFileTypes: true}).forEach((dirent) => {
    const fullPath = path.join(dir, dirent.name);
    if (dirent.isDirectory()) {
      walkDir(fullPath, callback);
    } else {
      callback(fullPath);
    }
  });
}

function groupImagesByFolder(root) {
  const folders = {};

  walkDir(root, (filePath) => {
    const relDir = path.relative(ROOT_DIR, path.dirname(filePath));
    if (!folders[relDir]) folders[relDir] = [];
    folders[relDir].push(filePath);
  });

  return folders;
}

function getImagePairs(files) {
  const pairs = {};
  files.forEach((file) => {
    const ext = path.extname(file);
    const base = path.basename(file, ext);
    let key;
    if (base.endsWith("-min")) {
      key = base.replace("-min", "");
      if (!pairs[key]) pairs[key] = {};
      pairs[key].min = file;
    } else {
      key = base;
      if (!pairs[key]) pairs[key] = {};
      pairs[key].original = file;
    }
  });
  return Object.values(pairs).filter((p) => p.original && p.min);
}

function toVitePath(filePath) {
  const rel = path
    .relative(path.join(__dirname, "src"), filePath)
    .replace(/\\/g, "/");
  return `/src/${rel}`;
}

function generateTSArray(arrayName, pairs) {
  return (
    `export type ImagePair = { original: string; min: string };\n` +
    `export const ${arrayName}: ImagePair[] = [\n` +
    pairs
      .map(
        (p) =>
          `  { original: "${toVitePath(p.original)}", min: "${toVitePath(
            p.min
          )}" }`
      )
      .join(",\n") +
    `\n];\n`
  );
}

function main() {
  if (!fs.existsSync(OUTPUT_DIR)) fs.mkdirSync(OUTPUT_DIR, {recursive: true});

  const folders = groupImagesByFolder(ROOT_DIR);

  Object.entries(folders).forEach(([relDir, files]) => {
    const pairs = getImagePairs(files);
    if (pairs.length === 0) return;

    // Имя массива = имя папки (если вложенная, то с _ вместо /)
    const arrayName = relDir ? relDir.replace(/[\/\\]/g, "_") : "root";
    const tsArray = generateTSArray(arrayName, pairs);

    const outFile = path.join(OUTPUT_DIR, `${arrayName}.ts`);
    fs.writeFileSync(outFile, tsArray, "utf8");
    console.log(`Generated: ${outFile}`);
  });
}

main();
