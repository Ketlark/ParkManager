import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Places extends BaseSchema {
  protected tableName = 'places'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.string('id').primary
      table.string('user_id').references('id').inTable('users').nullable()
      table.string('place_code').notNullable()
      table.integer('floor').notNullable()
      table.boolean('is_available').defaultTo(true).notNullable()
      table.dateTime('assigned_at').nullable()
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
