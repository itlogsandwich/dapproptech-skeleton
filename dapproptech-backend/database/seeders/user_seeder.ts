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

    const agent = await User.updateOrCreate({ email: 'agent@dapproptech.com'}, {
      fullName: 'agent',
      password: 'agent_password',
    });

    const client = await User.updateOrCreate({ email: 'client@dapproptech.com'}, {
      fullName: 'client',
      password: 'client_password',
    });

    await admin.related('roles').sync([adminRole.id])
    await agent.related('roles').sync([agentRole.id])
  }
}
