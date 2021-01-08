import { schema, rules } from '@ioc:Adonis/Core/Validator'

export default class RegisterPlaceValidator {
  public schema = schema.create({
    floor: schema.number([rules.unsigned()]),
    placeCode: schema.string({}, [
      rules.unique({ table: 'places', column: 'place_code' }),
      rules.maxLength(4),
      rules.minLength(4),
    ]),
  })
}
