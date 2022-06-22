import Joi from 'joi'

export default Joi.object({
  username: Joi.string().alphanum().min(3).lowercase().required(),
  password: Joi.string().min(3).required(),
})
