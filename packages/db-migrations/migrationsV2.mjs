import { Kysely } from "kysely";
/**
 * @param db {Kysely<any>}
**/
// Insert data for parking areas
export async function up(db) {
await db
  .insertInto('registered_cars')
  .values([
    {
      registration_id: 1,
      plate_number: '343434',
      registration_date: '2024-03-22',
      registration_date_expiration: '2025-03-22',
    },
    {
      registration_id: 2,
      plate_number: '565656',
      registration_date: '2023-02-02',
      registration_date_expiration: '2024-02-02',
    },
   
  ])
  .execute();

}
