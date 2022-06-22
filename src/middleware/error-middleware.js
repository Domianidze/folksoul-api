// eslint-disable-next-line no-unused-vars
export default (err, _, res, __) => {
  const error = err

  if (error.isJoi) {
    error.statusCode = 422
  }

  if (!error.statusCode) {
    error.statusCode = 500
  }

  res.status(error.statusCode).json({
    message: error.message,
  })
}
