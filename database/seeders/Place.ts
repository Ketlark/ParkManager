import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Place from 'App/Models/Place'

export default class PlaceSeeder extends BaseSeeder {
  public static developmentOnly = true

  public async run() {
    await Place.createMany([
      {
        floor: 0,
        placeCode: 'A000',
      },
      {
        floor: 0,
        placeCode: 'A001',
      },
      {
        floor: 0,
        placeCode: 'A002',
      },
      {
        floor: 0,
        placeCode: 'A003',
      },
      {
        floor: 0,
        placeCode: 'A004',
      },
      {
        floor: 1,
        placeCode: 'A000',
      },
      {
        floor: 1,
        placeCode: 'A001',
      },
      {
        floor: 1,
        placeCode: 'A002',
      },
      {
        floor: 2,
        placeCode: 'B000',
      },
      {
        floor: 2,
        placeCode: 'B001',
      },
      {
        floor: 2,
        placeCode: 'B002',
      },
    ])
  }
}
