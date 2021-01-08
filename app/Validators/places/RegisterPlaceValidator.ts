import { schema, rules } from '@ioc:Adonis/Core/Validator'

export default class RegisterPlaceValidator {
  public schema = schema.create({
    floor: schema.number([rules.unsigned()]),
    placeCode: schema.string({}, [rules.maxLength(4), rules.minLength(4)]),
  })
}
