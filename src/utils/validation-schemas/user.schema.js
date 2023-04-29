const Joi = require("joi")

const registerationSchema = Joi.object({
    username: Joi.string().alphanum().min(3).required(),
    email: Joi.string().email({ minDomainSegments: 2 }).required(),
    password: Joi.string().min(8).required(),
    hasAcceptedTerms: Joi.boolean().valid(true).required()
});

module.exports = {
    registerationSchema
}
