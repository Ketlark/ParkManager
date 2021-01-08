import { DateTime } from 'luxon'
import { v4 as uuid } from 'uuid'
import { column, BaseModel, beforeCreate, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm'
import User from './User'

export default class Place extends BaseModel {
  @column({ isPrimary: true })
  public id: string

  @belongsTo(() => User)
  public userAssigned: BelongsTo<typeof User>

  @column()
  public userId: string

  @column()
  public placeCode: string

  @column()
  public floor: number

  @column()
  public isAvailable: boolean

  @column.dateTime()
  public assignedAt?: DateTime | null

  /**
   * Auto-generate uuid of place
   * @param user Place object concerned before creation in database
   */
  @beforeCreate()
  public static async generateId(place: Place) {
    place.id = uuid()
  }
}
