import Joi from 'joi'

export default Joi.object({
  information: Joi.string().regex(/^[ა-ჰ-1-9 -;:'",.?!/—„“]+$/).message('\"information\" must only contain georgian letters').required(),
})
