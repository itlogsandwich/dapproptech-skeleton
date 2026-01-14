// import type { HttpContext } from '@adonisjs/core/http'

import Property from '#models/property'

export default class PropertiesController {
  public async index(){
    return await Property.query().orderBy('createdAt', 'desc');
  }

  public async featuredIndex()
  {
    return await Property.query()
          .where('isFeatured', true)
          .orderBy('createdAt', 'desc');
  }
}
