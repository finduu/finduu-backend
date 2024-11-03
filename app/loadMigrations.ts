import fs from 'fs'
import path from 'path'

export function loadDirectories(baseDir: string): string[] {
  const directories: string[] = []

  function walk(dir: string) {
    const items = fs.readdirSync(dir)
    for (const item of items) {
      const fullPath = path.join(dir, item)
      if (fs.statSync(fullPath).isDirectory()) {
        directories.push(fullPath)
        walk(fullPath)
      }
    }
  }

  walk(baseDir)
  return directories
}

export function loadMigrations(migrationsDir: string): string[] {
  return fs
    .readdirSync(migrationsDir)
    .filter((file) => file.endsWith('.ts') || file.endsWith('.js'))
    .map((file) => path.join(migrationsDir, file))
}
