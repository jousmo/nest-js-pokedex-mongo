import * as Joi from 'joi';

export const JoiConfig = Joi.object({
  NODE_ENV: Joi.string().required().default('dev'),
  DB_URL: Joi.string().required(),
  DB_NAME: Joi.string().required(),
  PORT: Joi.number().required(),
});
