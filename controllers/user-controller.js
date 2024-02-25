const db = require('../models/db')

exports.getByUser = async (req, res, next) => {
    try {
      // console.log(req.user);
      const user = await db.user.findFirst({
        where : { id : req.user.id}
      })
      res.json(user)
    } catch (err) {
      next(err)
    }
  }