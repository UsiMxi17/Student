import { pool } from "../config/db.js"

const getContact = async () => {
    let [data] = await pool.query("SELECT * FROM `messages`")
    return data
};


const getContactId = async (id) => {
    let [data] = await pool.query("SELECT * FROM `messages` WHERE `message`.`id` = ?",[id])
    return data
};

const insertContact= async(name, email, message, created_at) => {
    await pool.query("INSERT INTO `ecommerce_db`.`messages` (name, email, message, created_at) VALUES (?, ?,?,?)",[ name, email, message, created_at])
};

// const deleteContact = async(id) => {
    // await pool.query("DELETE FROM `ecommerce_db`.`messages` WHERE id = ?;",[id])
// };

// const updateContact = async(name, email, message, created_at, id) => {
    // await pool.query("UPDATE `ecommerce_db`.`bookings` SET name = ?, email = ?, message = ?, created_at = ? WHERE id = ?",[name, email, message, created_at, id])
    // return {name, email, message, id}
// };
export {getContact,getContactId,insertContact} // ,deleteContact,updateContact}