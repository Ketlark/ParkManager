import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class Admin {
  public async handle({ auth, response }: HttpContextContract, next: () => Promise<void>) {
    if (!auth.user || auth.user.role !== 'ADMIN') {
      return response.unauthorized("You're not logged as admin to perform this action")
    }

    await next()
  }
}
