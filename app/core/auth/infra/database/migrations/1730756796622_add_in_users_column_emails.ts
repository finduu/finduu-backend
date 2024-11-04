import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'users'

  public async up() {
    this.schema.table(this.tableName, (table) => {
      table.string('email', 100).unique().notNullable().after('full_name')
    })
  }

  public async down() {
    this.schema.table(this.tableName, (table) => {
      table.dropColumn('email')
    })
  }
}
