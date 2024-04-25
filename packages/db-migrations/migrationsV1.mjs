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
 
  await db.schema
    .createTable("violations")
    .addColumn("violation_id","integer", (col)=> col.autoIncrement().primaryKey())
    .addColumn("plate_number", "varchar(255)")
    .addColumn("type","varchar(255)")
    .addColumn("violation","float")
    .addColumn("logitude","float")
    .addColumn("latitude","float")
    .addColumn("timestamp","timestamp")
    .addColumn("image_key","varchar(255)")
    .addColumn("status","varchar(255)")
    .execute();
 
}
 
/**
 * @param db {Kysely<any>}
 */
 
export async function down(db) {
 
  
  await db.schema.dropTable("violated_cars").execute();
  await db.schema.dropTable("registered_cars").execute();
 
}
