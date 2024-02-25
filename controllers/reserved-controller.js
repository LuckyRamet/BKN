const db = require('../models/db')

exports.showBooking = async (req,res,next) => {
    try {
        const rs = await db.booking.findMany({
            where: {
                user_id: req.user.id
            }
        })
        res.json(rs)
    } catch (error) {
        next(error)
    }
}

exports.adminShowBooking = async (req,res,next) => {
    try {
        const rs = await db.booking.findMany({})
        // if (rs.length === 0) {

        // }
        // console.log(rs)
        res.json(rs)
    } catch (error) {
        next(error)
    }
}

exports.creacteBooking = async (req, res, next) => {
    const { datetime,  phone, disease, user_id} = req.body

    try {
        const booking = await db.booking.create({
            data:{
                datetime:new Date(datetime),
                phone,
                disease,
                user_id: Number(user_id)

            }
        })
        res.json(booking)
    } catch (error) {
        next(error)
    }
}

exports.deleteRerved = async (req, res, next ) => {
    const {bookingId} = req.params
    // console.log(bookingId);

    try {
        const booking = await db.booking.delete({
            where: {
                id: Number(bookingId)
            }
        })

        res.json(booking)
    } catch (error) {
        next(error)
        
    }
}