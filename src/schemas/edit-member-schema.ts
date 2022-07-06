import Joi from 'joi'

export default Joi.object({
  id: Joi.string().required(),
  avatarUrl: Joi.string(),
  name: Joi.string().min(3).regex(/^[ა-ჰ ]+$/).message('\"name\" must only contain georgian letters'),
  instrument: Joi.string().min(2).regex(/^[ა-ჰ ]+$/).message('\"instrument\" must only contain georgian letters'),
  orbitWidth: Joi.number(),
  color: Joi.string().regex(/^#[A-Fa-f0-9]{6}/).message('\"color\" must be a valid hexcode'),
  biography: Joi.string().regex(/^[ა-ჰ -;:'",.?!/]+$/).message('\"biography\" must only contain georgian letters'),
}).min(2)
