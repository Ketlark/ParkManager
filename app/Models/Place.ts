import { DateTime } from 'luxon'
import { column, BaseModel, hasOne, HasOne } from '@ioc:Adonis/Lucid/Orm'
import User from './User'

export default class Place extends BaseModel {
  @column({ isPrimary: true })
  public uuid: string

  @hasOne(() => User, {
    foreignKey: 'userId',
  })
  public profile: HasOne<typeof User>

  @column()
  public placeCode: string

  @column()
  public floor: number

  @column()
  public isAvailable: boolean

  @column.dateTime()
  public assignedAt: DateTime
}
