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
   .insertInto('violated_cars')
   .values([
    {
        license_plate: '434277',
        car_description: 'Audi A6,salon black',
        location: 'Manama',
        timestamp: '2024-04-10 14:30:00',
        type: 'Breaking light violation',
        image: 'evidence/image1.jpg',
        status: 'Completed',
    },
    {
      license_plate: '987654',
      car_description: 'Navy blue Honda civic',
      location: 'Isa town',
      timestamp: '2024-04-11 09:45:00',
      type: 'Smoking violation',
      image: 'https://example.com/image2.jpg',
      status: 'Review',
    },
    {
      license_plate: '120987',
      car_description: 'Black Toyota',
      location: 'Sanad',
      timestamp: '2024-04-12 16:20:00',
      type: 'Tailgating',
      image: 'https://example.com/image3.jpg',
      status: 'Rejected',
    },
   ])
   .execute();
 
  await db
    .insertInto('light_violations')
    .values([
      {
        license_plate: '19870',
        timestamp: '2024-04-10 14:30:00',
        image: 'https://example.com/light_violation1.jpg',
        status: 'Review',
        location: 'Sitra',
        violation_type: 'Breaklight',
      },
      {
        license_plate: '87651',
        timestamp: '2024-04-11 09:45:00',
        image: 'https://example.com/light_violation2.jpg',
        status: 'Reviewed',
        location: 'Jidali',
        violation_type: 'Headlight',
      },
      {
        license_plate: '874590',
        timestamp: '2024-04-12 16:20:00',
        image: 'https://example.com/light_violation3.jpg',
        status: 'Checked',
        location: 'Manama',
        violation_type: 'Breaklight',
      },
    ])
    .execute();
 
 
}
 