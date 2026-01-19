import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relation'
import User from '#models/user'


export default class Property extends BaseModel {
  @column({ isPrimary: true })
  declare id: number;

  @column({ columnName: 'user_id'})
  declare userId: number;

  @belongsTo(() => User)
  declare agent: BelongsTo<typeof User>

  @column()
  declare title: string;

  @column()
  declare location: string;

  @column()
  declare price: bigInteger;

  @column()
  declare type: string;

  @column()
  declare beds: number;

  @column()
  declare baths: number;

  @column()
  declare sqm: number;

  @column({ columnName: 'is_featured' })
  declare isFeatured: boolean;

  @column({ columnName: 'image_url' })
  declare imageUrl: string;

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime | null;

}
