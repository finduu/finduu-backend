import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm'
import User from './User'
export default class MissingPerson extends BaseModel {
  public static table = 'missing_persons'
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public age: number

  @column()
  public gender: string

  @column()
  public lastLocation: string

  @column()
  public registered_by: number

  @belongsTo(() => User, {
    foreignKey: 'registered_by',
    localKey: 'id'
  })
  public user: BelongsTo<typeof User>


  @column()
  public description: string

  @column()
  public first_photo: string

  @column()
  public second_photo: string | null

  @column()
  public third_photo: string | null

  @column()
  public fourth_photo: string | null

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}