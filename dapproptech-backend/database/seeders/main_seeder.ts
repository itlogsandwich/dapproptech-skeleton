import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class MainSeeder extends BaseSeeder {
  async run() {
    console.log('Seeding...')

    await new (await import('./role_seeder.js')).default(this.client).run()
    console.log('Roles seeded.')

    await new (await import('./user_seeder.js')).default(this.client).run()
    console.log('Users & Agents seeded.')

    await new (await import('./property_seeder.js')).default(this.client).run()
    console.log('Properties seeded and assigned.')

    console.log('Seeding Complete!')
  }
}
