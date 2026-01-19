import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'properties'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary();
      table.integer('user_id').unsigned().references('id').inTable('users').onDelete('CASCADE')
      table.string('title').notNullable();
      table.string('location').notNullable();
      table.bigInteger('price').notNullable();
      table.string('type').notNullable();
      table.integer('beds').notNullable();
      table.integer('baths').notNullable();
      table.integer('sqm').notNullable();
      table.boolean('is_featured').notNullable().defaultTo(false);
      table.string('image_url').notNullable();

      table.timestamp('created_at', { useTz: true });
      table.timestamp('updated_at',{ useTz: true });
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
