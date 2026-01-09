import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'properties'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary();
      table.string('title').notNullable();
      table.string('location').notNullable();
      table.string('price').notNullable();
      table.string('type').notNullable();
      table.integer('sqm').notNullable();
      table.string('image_url').notNullable();

      table.timestamp('created_at', { useTz: true });
      table.timestamp('updated_at',{ useTz: true });
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
