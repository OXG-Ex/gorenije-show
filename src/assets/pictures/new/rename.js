import {existsSync, readdirSync, renameSync} from "fs";
import {basename, extname, join} from "path";

// Функция для преобразования строки в camelCase
function toCamelCase(str) {
  return str
    .split(/[\s_]+/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join("");
}

// Основная функция обхода и переименования
function renameFilesRecursively(dir) {
  readdirSync(dir, {withFileTypes: true}).forEach((entry) => {
    const fullPath = join(dir, entry.name);

    if (entry.isDirectory()) {
      renameFilesRecursively(fullPath);
    } else {
      const ext = extname(entry.name);
      let base = basename(entry.name, ext);

      let newBase = null;

      // 1. Проверка на формат _N_N_11zon
      const minMatch1 = base.match(/^(.+?)(\d+)_(\d+)_11zon$/);
      if (minMatch1 && minMatch1[2] === minMatch1[3]) {
        newBase = toCamelCase(minMatch1[1] + minMatch1[2]) + "-min";
      }

      // 2. Проверка на формат -compressed
      const minMatch2 = base.match(/^(.+?)(\d+)-compressed$/);
      if (!newBase && minMatch2) {
        newBase = toCamelCase(minMatch2[1] + minMatch2[2]) + "-min";
      }

      // 3. Обычный файл
      if (!newBase) {
        newBase = toCamelCase(base);
      }

      const newName = newBase + ext;
      if (entry.name !== newName) {
        const newFullPath = join(dir, newName);
        if (!existsSync(newFullPath)) {
          renameSync(fullPath, newFullPath);
          console.log(`Renamed: ${entry.name} -> ${newName}`);
        } else {
          console.warn(`File already exists: ${newName}`);
        }
      }
    }
  });
}

// Запуск из текущей директории
renameFilesRecursively(process.cwd());
