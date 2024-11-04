import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Province from 'App/Models/Province'
export default class UserSeeder extends BaseSeeder {
  public async run() {
    await Province.createMany([
      {
        name: 'Test',
      },
      {
        name: 'Test',
      },
    ])
  }
}
