import {getBookings, getBookingId, insertBooking} from  '../models/bookingsModel.js'

const getBookingsCon = async(req,res)=>{
    res.json({employees:await getBookings()})
}

const getBookingIdCon = async(req,res)=>{
    res.json({employees:await getBookingId(req.params.id)})
}

const insertBookingCon = async (req,res)=>{
    let {name, email, booking_date, booking_time, stylist, comments, created_at} = req.body
    res.json({employees:await insertBooking(name, email, booking_date, booking_time, stylist, comments, created_at)})
}

// const updateBookingCon = async (req,res)=>{
    // console.log(req.params);

    // let {id}=req.params
    // let {name, email, booking_date, booking_time, stylist, comments, created_at} = req.body
    // res.json({employees:await updateBooking(name, email, booking_date, booking_time, stylist, comments, created_at, id)})
// }

// const deleteBookingCon = async(req,res)=>{
    // res.json({employees:await deleteBooking(req.params.id)})
// }

export {getBookingsCon, getBookingIdCon, insertBookingCon} // deleteBookingCon, updateBookingCon}