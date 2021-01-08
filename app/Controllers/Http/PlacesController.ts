import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Place from 'App/Models/Place'
import User from 'App/Models/User'
import RegisterPlaceValidator from 'App/Validators/places/RegisterPlaceValidator'
import UpdatePlaceValidator from 'App/Validators/places/UpdatePlaceValidator'
import { DateTime } from 'luxon'

export default class PlacesController {
  public async registerPlace({ request }: HttpContextContract) {
    const data = await request.validate(RegisterPlaceValidator)
    return Place.create(data)
  }

  public async updatePlace({ request, response, params }: HttpContextContract) {
    const data = await request.validate(UpdatePlaceValidator)

    const place = await Place.find(params.placeId)
    const user = await User.find(data.userAssigned)

    if (!place) return response.badRequest('No place found')
    if (!user) return response.badRequest('No user found')

    place.assignedAt = DateTime.fromJSDate(new Date())
    place.isAvailable = false

    return await place.related('userAssigned').associate(user)
  }

  public async freePlace({ response, params }: HttpContextContract) {
    const place = await Place.find(params.placeId)

    if (!place) return response.badRequest('No place found')
    if (place.isAvailable) {
      return response.badRequest('Place is already available')
    }

    place.assignedAt = null
    place.isAvailable = false

    return await place.related('userAssigned').dissociate()
  }

  public async showPlaces({ auth, request, response }: HttpContextContract) {
    if (request.get().floor)
      return await Place.query().where('floor', request.get().floor).andWhere('is_available', true)
    if (request.get().id) return await Place.findBy('id', request.get().id)

    if (request.get().userId) {
      if (auth.user?.id !== request.get().userId && auth.user?.role !== 'ADMIN')
        return response.unauthorized("You're not authorize to retrieve these informations")
      return await Place.query().where('user_id', request.get().userId)
    }

    return response.badRequest('No parameters found')
  }

  public async showStatistics() {
    const { count: placesAssigned } = await Place.query()
      .where('is_available', false)
      .count('*')
      .first()
    const { count: totalPlaces } = await Place.query().count('*').first()

    return { occupationRate: +((placesAssigned * 100) / totalPlaces).toFixed(2) }
  }
}
