// generateAllImports.mjs
import fs from "fs";
import path from "path";
import {fileURLToPath} from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ROOT_DIR = path.join(__dirname, "assets/pictures");
const OUTPUT_FILE = path.join(__dirname, "generated/allImageImports.ts");

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

function getAllFolders(root) {
  const folders = new Set();
  walkDir(root, (filePath) => {
    folders.add(path.dirname(filePath));
  });
  return Array.from(folders);
}

function toViteGlob(folderPath) {
  // Получаем путь относительно src
  const rel = path
    .relative(path.join(__dirname, "src"), folderPath)
    .replace(/\\/g, "/");
  return `/src/${rel}/*.{jpg,jpeg,png,webp,gif}`;
}

function toVarName(folderPath) {
  // Имя переменной по имени папки (вложенные через _)
  const rel = path.relative(ROOT_DIR, folderPath).replace(/[\\/]/g, "_");
  return rel || "root";
}

function generateImports(folders) {
  return folders
    .map((folder) => {
      const varName = toVarName(folder);
      const globPath = toViteGlob(folder);
      return `export const ${varName}Images = import.meta.glob('${globPath}', { eager: true });`;
    })
    .join("\n");
}

function main() {
  const folders = getAllFolders(ROOT_DIR);
  const imports = generateImports(folders);
  const fileContent = `// Автоматически сгенерировано\n${imports}\n`;
  fs.writeFileSync(OUTPUT_FILE, fileContent, "utf8");
  console.log(`Generated: ${OUTPUT_FILE}`);
}

main();

// export const allImages = {
//   ...firePyrotechnicShow_ColoredSmokeImages,
//   ...firePyrotechnicShow_DragonImages,
//   ...firePyrotechnicShow_FirstDanceImages,
//   ...firePyrotechnicShow_GoldenDreamImages,
//   ...firePyrotechnicShow_HeavySmokeImages,
//   ...firePyrotechnicShow_PyroPostcards_PyroInstallationsImages,
//   ...firePyrotechnicShow_PyroPostcards_PyroLettersAndNumbersImages,
//   ...firePyrotechnicShow_PyroPostcards_PyroPostcardsImages,
//   ...firePyrotechnicShow_RussianFaityTalesImages,
//   ...firePyrotechnicShow_RussianFlexImages,
//   ...firePyrotechnicShow_SparkleNightImages,
//   ...firePyrotechnicShow_TeslaShowAndInteractive_InteractiveImages,
//   ...firePyrotechnicShow_TeslaShowAndInteractive_TeslaShowImages,
//   ...genderPartyImages,
//   ...iceDartsImages,
//   ...mirrorLaserShowImages,
//   ...welcome_angelImages,
//   ...welcome_MirrorImages,
//   ...certificatesImages,
//   ...rootImages,
//   ...firePyrotechnicShow_ColdFountainsHeartsImages,
// };

// export const getRootImageUrl = (path: string): string => {
//   return (allImages[path] as {default: string})?.default || "";
// };
