// generateImagesArrays.js
import {existsSync, mkdirSync, readdirSync, writeFileSync} from "fs";
import {basename, dirname, extname, join, relative} from "path";

import path from "path";
import {fileURLToPath} from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ROOT_DIR = join(__dirname, "assets/pictures"); // путь к папке с картинками
const OUTPUT_DIR = join(__dirname, "generated"); // куда сохранять js-файлы

function walkDir(dir, callback) {
  readdirSync(dir, {withFileTypes: true}).forEach((dirent) => {
    const fullPath = join(dir, dirent.name);
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
    const relDir = relative(ROOT_DIR, dirname(filePath));
    if (!folders[relDir]) folders[relDir] = [];
    folders[relDir].push(filePath);
  });

  return folders;
}

function getImagePairs(files) {
  // Группируем по базовому имени (без -min и расширения)
  const pairs = {};
  files.forEach((file) => {
    const ext = extname(file);
    const base = basename(file, ext);
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
  // Оставляем только те, у кого есть обе версии
  return Object.values(pairs).filter((p) => p.original && p.min);
}

function toRequireString(filePath) {
  // Приводим к относительному пути от OUTPUT_DIR
  let rel = relative(OUTPUT_DIR, filePath).replace(/\\/g, "/");
  if (!rel.startsWith(".")) rel = "./" + rel;
  return `require('${rel}')`;
}

function generateJSArray(pairs) {
  return (
    `export const images = [\n` +
    pairs
      .map(
        (p) =>
          `  { original: ${toRequireString(p.original)}, min: ${toRequireString(
            p.min
          )} }`
      )
      .join(",\n") +
    `\n];\n`
  );
}

function main() {
  if (!existsSync(OUTPUT_DIR)) mkdirSync(OUTPUT_DIR);

  const folders = groupImagesByFolder(ROOT_DIR);

  Object.entries(folders).forEach(([relDir, files]) => {
    const pairs = getImagePairs(files);
    if (pairs.length === 0) return;

    const jsArray = generateJSArray(pairs);

    // Имя файла: images_<имя_папки>.js
    const folderName = relDir ? relDir.replace(/[\/\\]/g, "_") : "root";
    const outFile = join(OUTPUT_DIR, `images_${folderName}.js`);
    writeFileSync(outFile, jsArray, "utf8");
    console.log(`Generated: ${outFile}`);
  });
}

main();
