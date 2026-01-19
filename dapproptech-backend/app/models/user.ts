import { DateTime } from 'luxon'
import hash from '@adonisjs/core/services/hash'
import { compose } from '@adonisjs/core/helpers'
import { BaseModel, column, beforeSave, manyToMany, hasMany } from '@adonisjs/lucid/orm'
import { withAuthFinder } from '@adonisjs/auth/mixins/lucid'
import type { ManyToMany, HasMany } from '@adonisjs/lucid/types/relations'
import Role from '#models/role'
import Property from '#models/property'

const AuthFinder = withAuthFinder(() => hash.use('scrypt'), {
  uids: ['email'],
  passwordColumnName: 'password',
})

export default class User extends compose(BaseModel, AuthFinder) {
  @column({ isPrimary: true })
  declare id: number;

  @column({ columnName: 'full_name'})
  declare fullName: string | null;

  @column()
  declare email: string

  @column({ serializeAs: null })
  declare password: string;

  @column({ columnName: 'nfc_public_key' })
  declare nfcPublicKey: string | null;

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime | null;

  @hasMany(() => Property)
  declare listings: hasMany<typeof Property>

  @manyToMany(() => Role, {
    pivotTable: 'role_users',
    localKey: 'id',
    pivotForeignKey: 'user_id',
    relatedKey: 'id',
    pivotRelatedForeignKey: 'role_id'

  })
  declare roles: ManyToMany<typeof Role>

}
