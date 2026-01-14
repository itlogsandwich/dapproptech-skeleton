import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Property extends BaseModel {
  @column({ isPrimary: true })
  declare id: number;

  @column()
  declare title: string;

  @column()
  declare location: string;

  @column()
  declare price: string;

  @column()
  declare type: string;

  @column()
  declare sqm: number;

  @column({ columnName: 'is_featured' })
  declare isFeatured: boolean;

  @column({ columnName: 'image_url' })
  declare imageUrl: string;

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
