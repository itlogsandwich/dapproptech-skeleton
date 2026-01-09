// import type { HttpContext } from '@adonisjs/core/http'

import Property from '#models/property'

export default class PropertiesController {
  public async index(){
    return await Property.query().orderBy('createdAt', 'desc');
  }
}
