import Joi from 'joi'

export default Joi.object({
  information: Joi.string().regex(/^[ა-ჰ -;:'",.?!/]+$/).message('\"information\" must only contain georgian letters').required(),
})
