import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'
import LoginValidator from 'App/Validators/LoginValidator'
import RegisterValidator from 'App/Validators/RegisterValidator'

export default class UsersController {
  public async register({ request, auth }: HttpContextContract) {
    const data = await request.validate(RegisterValidator)

    const user = await User.create(data)
    const token = await auth.use('api').login(user, {
      expiresIn: '10 days',
    })

    return token.toJSON()
  }

  public async login({ request, auth }: HttpContextContract) {
    const data = await request.validate(LoginValidator)
    const token = await auth.use('api').attempt(data.email, data.password, {
      expiresIn: '10 days',
    })

    return token.toJSON()
  }
}
