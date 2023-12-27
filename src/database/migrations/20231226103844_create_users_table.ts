import { Knex } from "knex";

const tableName = 'users';

export async function up(knex: Knex): Promise<void> {
   await knex.schema.createTable(tableName, function(table) {
      table.string('id').primary();
      table.string('nik', 16).notNullable().unique();
      table.string('fullname').notNullable();
      table.string('phone', 15).notNullable().unique();
      table.string('address').notNullable();
      table.enum('role', ['super admin', 'admin', 'user']).notNullable().defaultTo('user');
      table.string('password').notNullable();
      table.timestamps(true, true);
   });
}

export async function down(knex: Knex): Promise<void> {
   await knex.schema.dropTable(tableName);
}

