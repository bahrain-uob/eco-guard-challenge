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
    .createTable("violated_cars")
    .addColumn("car_id","integer", (col)=> col.autoIncrement().primaryKey())
    .addColumn("license_plate", "varchar(255)", (col)=>col.notNull())
    .addColumn("car_description", "text")
    .addColumn("location","varchar(255)")
    .addColumn("timestamp","timestamp")
    .addColumn("image","varchar(255)")
    .addColumn("status","varchar(50)")
    .execute();
 
  await db.schema
     .createTable("light_violations")
     .addColumn("car_id", "integer", (col) => col.autoIncrement().primaryKey())
     .addColumn("violation_type", "varchar(50)")
     .addColumn("license_plate", "varchar(255)", (col) => col.notNull())
     .addColumn("timestamp", "timestamp")
     .addColumn("location", "varchar(255)")
     .addColumn("image", "varchar(255)")
     .addColumn("status", "varchar(50)")
     .execute();
   
  }
 
/**
 * @param db {Kysely<any>}
 */
 
export async function down(db) {
 
  await db.schema.dropTable("registered_cars").execute();
  await db.schema.dropTable("violated_cars").execute();
  await db.schema.dropTable("light_violations").extecute();
 
}