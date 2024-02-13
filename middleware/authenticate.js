
module.exports = (req, res, next) => {
    const authorization = req.headers.authorization
    if( !authorization ) {
      throw new Error('Unauthorized')
    }
  
    next()
  }