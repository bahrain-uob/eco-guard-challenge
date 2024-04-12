import { Kysely } from "kysely";

/**
 * @param db {Kysely<any>}
 */
export async function up(db) {
  await db.schema
    .createTable("registered_cars")
    .addColumn("registration_id", "integer", (col) => col.autoIncrement().primaryKey())
    .addColumn("plate_number", "varchar(255)", (col) => col.notNull())
    .addColumn("registration_date", "date")
    .addColumn("registration_date_expiration", "date")
    .execute();


  }

/**
 * @param db {Kysely<any>}
 */

export async function down(db) {

  await db.schema.dropTable("registered_cars").execute();
 
}
