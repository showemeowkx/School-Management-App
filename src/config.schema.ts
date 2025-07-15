import * as Joi from 'joi';

export const configValidationSchema = Joi.object({
  DB_HOST: Joi.string().default('localhost').required(),
  PORT: Joi.number().default(3000).required(),
});
