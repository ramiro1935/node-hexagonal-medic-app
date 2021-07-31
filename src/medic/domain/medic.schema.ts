import Joi from 'joi'

export const schemas = {
  GET_ONE: Joi.object({
    id: Joi.number().integer().required(),
  }),
  GET_PAGE: Joi.object({
    page: Joi.number().integer().required(),
  }),
  DELETE: Joi.object({
    id: Joi.number().integer().required(),
  }),
  UPDATE: Joi.object({
    id: Joi.number().integer(),
    name: Joi.string(),
    lastname: Joi.string(),
    identifier: Joi.string()
  }),
  INSERT: Joi.object({
    id: Joi.number().integer().required(),
    name: Joi.string().required(),
    lastname: Joi.string().required(),
    identifier: Joi.string().required(),
   
  }),
}
