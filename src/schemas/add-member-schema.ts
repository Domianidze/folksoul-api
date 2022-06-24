import Joi from 'joi'

export default Joi.object({
  avatarUrl: Joi.string(),
  name: Joi.string().min(3).regex(/^[ა-ჰ]+$/).message('\"name\" must only contain georgian letters').required(),
  instrument: Joi.string().min(2).regex(/^[ა-ჰ]+$/).message('\"instrument\" must only contain georgian letters').required(),
  orbitWidth: Joi.number().required(),
  color: Joi.string().regex(/^#[A-Fa-f0-9]{6}/).message('\"color\" must be a valid hexcode').required(),
  biography: Joi.string().regex(/^[ა-ჰ -;:'",.?!/]+$/).message('\"biography\" must only contain georgian letters').required(),
})
