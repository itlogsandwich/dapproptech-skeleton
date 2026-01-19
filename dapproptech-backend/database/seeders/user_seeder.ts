import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Role, {RoleType} from '#models/role'
import User from '#models/user'
export default class extends BaseSeeder {
  async run() {
    const adminRole = await Role.findByOrFail('name', RoleType.ADMIN)
    const agentRole = await Role.findByOrFail('name', RoleType.AGENT)
    const clientRole = await Role.findByOrFail('name', RoleType.CLIENT)

    const admin = await User.updateOrCreate({ email: 'admin@dapproptech.com'}, {
      fullName: 'SysAdmin',
      password: 'secret_password',
    });

    const agentDummyData = [
      { name: 'Sarah Jenkins', email: 'sarah.j@dapproptech.com' },
      { name: 'Michael Chen', email: 'm.chen@dapproptech.com' },
      { name: 'Jessica Davis', email: 'j.davis@dapproptech.com' },
      { name: 'David Wilson', email: 'd.wilson@dapproptech.com' },
      { name: 'Emily Rodriguez', email: 'e.rodriguez@dapproptech.com' },
      { name: 'James Thompson', email: 'j.thompson@dapproptech.com' },
      { name: 'Robert Martinez', email: 'r.martinez@dapproptech.com' },
      { name: 'Jennifer White', email: 'j.white@dapproptech.com' },
      { name: 'William Anderson', email: 'w.anderson@dapproptech.com' },
      { name: 'Elizabeth Taylor', email: 'e.taylor@dapproptech.com' },
      { name: 'Thomas Moore', email: 't.moore@dapproptech.com' },
      { name: 'Barbara Jackson', email: 'b.jackson@dapproptech.com' },
    ]

    for (const data of agentDummyData) {
      const agent = await User.updateOrCreate({ email: data.email }, {
        fullName: data.name,
        password: 'password123', // Standardize dev passwords
      })

      await agent.related('roles').sync([agentRole.id])
    }

    const client = await User.updateOrCreate({ email: 'client@dapproptech.com'}, {
      fullName: 'client',
      password: 'client_password',
    });

    await admin.related('roles').sync([adminRole.id])
  }
}
