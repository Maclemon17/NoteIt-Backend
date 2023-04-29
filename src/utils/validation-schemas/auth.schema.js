const Joi = require("joi");

const authSchema = Joi.object({
    email: Joi.string().email({ minDomainSegments: 2 }).required(),
    password: Joi.string().min(8).required()
});

module.exports = authSchema;