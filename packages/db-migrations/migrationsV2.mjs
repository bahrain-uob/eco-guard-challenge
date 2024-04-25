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
 
await db
   .insertInto('violations')
   .values([
    {    
      violation_id:1,
      license_plate: '434277',
      type: 'tailgating',
      logitude: 26.224447,
      latitude: 50.617151,
      timestamp:"2024-04-24 15:45:30",
      image_key: 'evidence/image1.jpg',
      status: 'aproved',
    },
    {    
      violation_id:2,
      license_plate: '434277',
      type: 'unregisterd car',
      logitude: 26.054315,
      latitude: 50.537455,
      timestamp:"2024-04-24 15:45:30",
      image_key: 'evidence/image1.jpg',
      status: 'review',
    },
    {    
      violation_id:3,
      license_plate: '434277',
      type: 'tailgating',
      logitude: 26.152973,
      latitude: 50.474248,
      timestamp:"2024-04-24 15:45:30",
      image_key: 'evidence/image1.jpg',
      status: 'rejected',
    },
   ])
   .execute();
  
  }