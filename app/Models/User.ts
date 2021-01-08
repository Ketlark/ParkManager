import { DateTime } from 'luxon'
import { v4 as uuid } from 'uuid'
import Hash from '@ioc:Adonis/Core/Hash'
import { column, beforeSave, BaseModel, beforeCreate, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'
import Place from './Place'

export default class User extends BaseModel {
  @column({ isPrimary: true })
  public id: string

  @column()
  public email: string

  @column({ serializeAs: null })
  public password: string

  @column()
  public firstname: string

  @column()
  public lastname: string

  @column()
  public role: string

  @hasMany(() => Place)
  public placesAssigned: HasMany<typeof Place>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @beforeSave()
  public static async hashPassword(user: User) {
    if (user.$dirty.password) {
      user.password = await Hash.make(user.password)
    }
  }

  /**
   * Auto-generate uuid of user
   * @param user User object concerned before creation in database
   */
  @beforeCreate()
  public static async generateId(user: User) {
    user.id = uuid()
  }
}
