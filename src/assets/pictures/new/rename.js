const fs = require("fs");
const path = require("path");

// Функция для преобразования строки в camelCase
function toCamelCase(str) {
  return str
    .split(/[\s_]+/)
    .map((word, i) =>
      i === 0
        ? word.charAt(0).toUpperCase() + word.slice(1)
        : word.charAt(0).toUpperCase() + word.slice(1)
    )
    .join("");
}

// Основная функция обхода и переименования
function renameFilesRecursively(dir) {
  fs.readdirSync(dir, {withFileTypes: true}).forEach((entry) => {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      renameFilesRecursively(fullPath);
    } else {
      const ext = path.extname(entry.name);
      let base = path.basename(entry.name, ext);

      // Проверяем на минифицированную версию
      const minMatch = base.match(/^(.+?)(\d+)_(\d+)_11zon$/);
      let newBase;
      if (minMatch && minMatch[2] === minMatch[3]) {
        // Оригинальное имя до числа
        newBase = toCamelCase(minMatch[1] + minMatch[2]) + "-min";
      } else {
        newBase = toCamelCase(base);
      }

      const newName = newBase + ext;
      if (entry.name !== newName) {
        const newFullPath = path.join(dir, newName);
        if (!fs.existsSync(newFullPath)) {
          fs.renameSync(fullPath, newFullPath);
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
