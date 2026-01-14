import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Role, { RoleType } from '#models/role'

export default class extends BaseSeeder {
  async run() {
    const roles = Object.values(RoleType).map((roleName) => ({
        name: roleName
    }));

    await Role.updateOrCreateMany('name', roles);
  }
}
