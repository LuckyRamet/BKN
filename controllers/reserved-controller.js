const db = require('../models/db')

exports.showBooking = async (req, res, next) => {
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

exports.adminShowBooking = async (req, res, next) => {
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
    const { datetime, phone, disease, user_id, notes } = req.body

    try {
        console.log(req.body)
        const booking = await db.booking.create({
            data: {
                datetime: new Date(datetime),
                phone,
                disease,
                user_id: Number(user_id),
                notes
            }
        })
        res.json(booking)
    } catch (error) {
        next(error)
    }
}

exports.deleteRerved = async (req, res, next) => {
    const { bookingId } = req.params
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

exports.getResevedId = async (req, res, next) => {

    const { id } = req.params
    try {

        const rs = await db.booking.findFirst({
            where: {
                id: +id
            }
        })
        res.json(rs)

    } catch (error) {
        next(error)
    }
}

exports.editRerved = async (req, res, next) => {
    const { bookingId } = req.params;
    const { phone, disease } = req.body;

    try {
        const updatedBooking = await db.booking.update({
            where: {
                id: Number(bookingId)
            },
            data: {
                phone,
                disease
            }
        });

        res.json(updatedBooking);
    } catch (error) {
        next(error);
    }
}

exports.creacteBooking = async (req, res, next) => {
    try {
        const input = req.body
        const datetime = new Date(input.datetime)
        
        const booking = await db.booking.create({
        
            data: {
                datetime,
                phone: input.phone,
                disease: input.disease,
                user_id: +input.user_id,
                notes: input.notes,
                
                
            }
        })
        res.json({booking})
    } catch (error) {
        next(error);
    }




}