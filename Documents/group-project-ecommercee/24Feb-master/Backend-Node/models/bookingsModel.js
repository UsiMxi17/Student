import { pool } from "../config/db.js"

const getBookings = async () => {
    let [data] = await pool.query("SELECT * FROM `bookings`")
    return data
};


const getBookingId = async (id) => {
    let [data] = await pool.query("SELECT * FROM `bookings` WHERE `bookings`.`id` = ?",[id])
    return data
};

const insertBooking= async(name, email, booking_date, booking_time, stylist, comments) => {
    await pool.query("INSERT INTO `ecommerce_db`.`bookings` (name, email, booking_date, booking_time, stylist, comments) VALUES (?, ?,?,?,?,?)",[ name, email, booking_date, booking_time, stylist, comments])
};

// const deleteBooking = async(id) => {
    // await pool.query("DELETE FROM `ecommerce_db`.`bookings` WHERE eid = ?;",[id])
// };

// const updateBooking = async(name, email, booking_date, booking_time, stylist, comments, id) => {
    // await pool.query("UPDATE `ecommerce_db`.`bookings` SET name = ?, email = ?, booking_date = ?, booking_time = ?, stylist =?, comments =? WHERE id = ?",[name, email, booking_date, booking_time, stylist, comments, id])
    // return {name, email, booking_date, booking_time, stylist, comments, id}
// };
export {getBookings,getBookingId,insertBooking} // deleteBooking,updateBooking}
