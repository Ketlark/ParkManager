import { schema, rules } from '@ioc:Adonis/Core/Validator'

export default class UpdatePlaceValidator {
  public schema = schema.create({
    userAssigned: schema.string({}, [rules.uuid()]),
  })
}
