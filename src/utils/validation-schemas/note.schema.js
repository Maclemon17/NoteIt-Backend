const Joi = require("joi");

const noteSchema = Joi.object({
    title: Joi.string().required(),
    note: Joi.string().required(),
    // author: Joi.string().required()
})

module.exports = noteSchema;