import type { HttpContext } from '@adonisjs/core/http'
import User from '#models/user'
import { RoleType } from '#models/role'

export default class AgentsController {

  async index( { response }: HttpContext ) {

    const agents = await User.query()
    .whereHas('roles', (rolesQuery) => {
        rolesQuery.where('name', RoleType.AGENT)
    })
    .withCount('listings')
    .orderBy('fullName', 'asc')

    const formattedAgents = agents.map(agent => {
      return {
        ...agent.serialize(),
        listings: agent.$extras.listings_count,
      }
    })
    return response.ok(formattedAgents)
  }

  public async show({ params, response }: HttpContext)
  {
    try
    {
      const agent = await User.query()
          .where('id', params.id)
          .withCount('listings')
          .preload('listings')
          .firstOrFail()

      return response.ok({
        ...agent.serialize(),
        listingsCount: agent.$extras.listings_count,
        listings: agent.listings,
      })
    }
    catch (error)
    {
      return response.notFound({ message: 'Agent not Found'})
    }
  }
}
