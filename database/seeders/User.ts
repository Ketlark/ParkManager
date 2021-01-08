import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'

export default class UserSeeder extends BaseSeeder {
  public static developmentOnly = true

  public async run() {
    await User.createMany([
      {
        email: 'test.park@gmail.com',
        password: 'password',
        firstname: 'test',
        lastname: 'test',
      },
      {
        email: 'test.park.admin@gmail.com',
        password: 'password',
        firstname: 'test',
        lastname: 'test',
        role: 'ADMIN',
      }
    ])
  }
}
