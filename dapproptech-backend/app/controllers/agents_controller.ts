import type { HttpContext } from '@adonisjs/core/http'
import User from '#models/user'
import { RoleType } from '#models/role'

export default class AgentsController {

  async index( { response }: HttpContext ) {

    const agents = await User.query()
    .whereHas('roles', (rolesQuery) => {
        rolesQuery.where('name', RoleType.AGENT)
    })
    .orderBy('fullName', 'asc')
    .exec()

    return response.ok(agents)
  }
}
