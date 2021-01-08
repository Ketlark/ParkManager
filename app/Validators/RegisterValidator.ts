import { schema, rules } from '@ioc:Adonis/Core/Validator'

export default class RegisterValidator {
  public schema = schema.create({
    email: schema.string({}, [
      rules.required(),
      rules.email({
        sanitize: true,
      }),
      rules.unique({ table: 'users', column: 'email' }),
    ]),
    password: schema.string({}, [rules.required(), rules.confirmed(), rules.minLength(8)]),
    firstname: schema.string({}, [
      rules.required(),
      rules.alpha({
        allow: ['space', 'dash'],
      }),
    ]),
    lastname: schema.string({}, [
      rules.required(),
      rules.alpha({
        allow: ['space', 'dash'],
      }),
    ]),
    role: schema.string({}, [rules.alpha()]),
  })
}
