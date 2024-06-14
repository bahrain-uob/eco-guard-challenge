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
      plate_number: '65267',
      registration_date: '2024-03-22',
      registration_date_expiration: '2025-03-22',
    },
    {
      registration_id: 2,
      plate_number: '175777',
      registration_date: '2023-02-02',
      registration_date_expiration: '2024-02-02',
    },
    {
      registration_id: 3,
      plate_number: '324505',
      registration_date: '2023-02-04',
      registration_date_expiration: '2024-02-06',
    },
    {
      registration_id: 4,
      plate_number: '617826',
      registration_date: '2023-02-07',
      registration_date_expiration: '2024-02-09',
    },
    {
      registration_id: 5,
      plate_number: '49972',
      registration_date: '2023-02-09',
      registration_date_expiration: '2024-02-10',
    },
    {
      registration_id: 6,
      plate_number: '540074',
      registration_date: '2023-02-10',
      registration_date_expiration: '2024-02-02',
    },
  ])
  .execute();
 
await db
   .insertInto('violations')
   .values([
    {    
      violation_id:1,
      plate_number: '175777',
      type: 'unregistered car', 
      latitude: 26.185018,
      longitude: 50.503507,
      timestamp:"2024-05-13 12:39:43",
      image_key: '1_91343852333181838466725509209824728477661450287_25_1.jpg  ',
      status: 'aproved',
    },
    {    
      violation_id:2,
      plate_number: '537018',
      type: 'yellow lane',
      latitude: 26.054315,
      longitude: 50.537455,
      timestamp:"2024-04-22 15:45:30",
      image_key: '1_91343852333181838466725509209824728477661450287_25_1-2.jpg  ',
      status: 'review',
    },
    {    
      violation_id:3,
      plate_number: '434277',
      type: 'yellow lane', 
      latitude: 26.228143,
      longitude: 50.474248,
      timestamp:"2024-04-23 15:45:30",
      image_key: '1_91343852333181838466725509209824728477661450287_25_1-2.jpg  ',
      status: 'rejected',
    },


   {    
    violation_id:4,
    plate_number: '65267',
    type: 'unregistered car', 
    latitude: 26.231530,
    longitude: 50.540233,
    timestamp:"2024-04-25 15:45:30",
    image_key: '10_91343852333181943617352446110357312894010686796_25_0.jpg  ',
    status: 'aproved',
  },
  {    
    violation_id:5,
    plate_number: '537018',
    type: 'yellow lane',
    latitude: 26.054315,
    longitude: 50.537455,
    timestamp:"2024-04-20 15:45:30",
    image_key: '1_91343852333181838466725509209824728477661450287_25_1-2.jpg  ',
    status: 'review',
  },
  {    
    violation_id:6,
    plate_number: '434277',
    type: 'yellow lane',
    latitude: 26.152973,
    longitude: 50.474248,
    timestamp:"2024-04-27 15:45:30",
    image_key: '1_91343852333181838466725509209824728477661450287_25_1-2.jpg  ',
    status: 'rejected',
  },
   ])

   .execute();
  }