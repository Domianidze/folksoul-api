import Joi from 'joi'

export default Joi.object({
  id: Joi.string().required(),
  iconUrl: Joi.string(),
  name: Joi.string().min(2),
  link: Joi.string().regex(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/).message('\"link\" must be a valid link'),
}).min(2)
