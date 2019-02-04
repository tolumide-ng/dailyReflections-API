import Joi from 'joi';

const joiValidation = {
  validateBody: schema => (req, res, next) => {
    const result = Joi.validate(req.body, schema);
    if (result.error) {
      return res.status(400).json(result.error);
    }
    if (!req.value) { req.value = {}; }
    req.value['body'] = result.value;
    next();
  },

  schemas: {
    authSchema: Joi.object().keys({
      success: Joi.string().required(),
      lowPoint: Joi.string().required(),
      takeAway: Joi.string().required(),
    }),
  },
};

export default joiValidation;
