/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes/index.ts` as follows
|
| import './cart'
| import './customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

/**
 * Authentification & Users
 */

Route.get('/', async () => {
  return { hello: 'world' }
})

Route.post('/users/register', 'UsersController.register')
Route.post('/users/login', 'UsersController.login')

/**
 * Place controller
 */

Route.group(() => {
  Route.post('register', 'PlacesController.registerPlace')
  Route.get('statistics', 'PlacesController.showStatistics')
  Route.post(':placeId', 'PlacesController.updatePlace')
  Route.post(':placeId/release', 'PlacesController.freePlace')
})
  .prefix('places')
  .middleware('admin')

Route.get('show', 'PlacesController.showPlaces').prefix('places')
