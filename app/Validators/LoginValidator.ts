import { schema, rules } from '@ioc:Adonis/Core/Validator'

export default class LoginValidator {
  public schema = schema.create({
    email: schema.string({}, [
      rules.email({
        sanitize: true,
      }),
    ]),
    password: schema.string(),
  })
}
