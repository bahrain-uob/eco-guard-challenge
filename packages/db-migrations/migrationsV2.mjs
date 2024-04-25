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
      plate_number: '434277',
      type: 'tailgating',
      latitude: 26.224447,
      longitude: 50.617151,
      timestamp:"2024-04-24 15:45:30",
      image_key: 'evidence/image1.jpg',
      status: 'aproved',
    },
    {    
      violation_id:2,
      plate_number: '434277',
      type: 'unregisterd car',
      latitude: 26.054315,
      longitude: 50.537455,
      timestamp:"2024-04-24 15:45:30",
      image_key: 'evidence/image1.jpg',
      status: 'review',
    },
    {    
      violation_id:3,
      plate_number: '434277',
      type: 'tailgating',
      latitude: 26.152973,
      longitude: 50.474248,
      timestamp:"2024-04-24 15:45:30",
      image_key: 'evidence/image1.jpg',
      status: 'rejected',
    },
   ])
   .execute();
  
  }