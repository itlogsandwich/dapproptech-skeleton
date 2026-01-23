import type { HttpContext } from '@adonisjs/core/http'

import Property from '#models/property'

export default class PropertiesController {
  public async index(){
    return await Property.query()
        .preload('agent')
        .orderBy('createdAt', 'desc');
  }

  public async featuredIndex()
  {
    return await Property.query()
          .where('isFeatured', true)
          .preload('agent')
          .orderBy('createdAt', 'desc');
  }

  public async show({ params, response }: HttpContext)
  {
    try
    {
      const property = await Property.query()
          .where('id', params.id).preload('agent').firstOrFail();

      return response.ok(property)
    }
    catch (error)
    {
      return response.notFound({ message: 'Property not Found'})
    }
  }
}
