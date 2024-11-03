import Env from '@ioc:Adonis/Core/Env'
import { resolve, sep } from 'path'
import type { DatabaseConfig } from '@ioc:Adonis/Lucid/Database'
import { loadDirectories } from 'App/loadMigrations'

function loadMigrationDirectories(baseDir: string): string[] {
  const allDirectories = loadDirectories(baseDir)
  return allDirectories.filter((dir) => dir.includes('migrations'))
}

const baseDir = resolve(__dirname, '../app/core')

const migrationDirectories = [
  ...loadMigrationDirectories(baseDir),
  resolve(__dirname, './database/migrations'),
]

//console.log('Diretórios de migrations:', migrationDirectories)

const modularSeeders = loadDirectories(baseDir)
  .filter((path) => path.includes(`db${sep}`) && path.includes('seeders'))
  .map((k) => resolve(baseDir, k.split(`${baseDir}${sep}`)[1]))

const databaseConfig: DatabaseConfig = {
  connection: Env.get('DB_CONNECTION'),

  connections: {
    mysql: {
      client: 'mysql',
      connection: {
        host: Env.get('DB_HOST', 'localhost'),
        port: Env.get('DB_PORT', '3306'),
        user: Env.get('MYSQL_USER'),
        password: Env.get('DB_PASSWORD'),
        database: Env.get('DB_DATABASE'),
      },
      migrations: {
        naturalSort: true,
        paths: migrationDirectories,
      },
      seeders: {
        paths: [...modularSeeders, resolve(__dirname, './database/seeders')],
      },
      healthCheck: false,
      debug: false,
    },
  },
}

export default databaseConfig
