import {getContact, getContactId, insertContact} from  '../models/contactModel.js'

const getContactCon = async(req,res)=>{
    res.json({employees:await getContact()})
}

const getContactIdCon = async(req,res)=>{
    res.json({employees:await getContactId(req.params.id)})
}

const insertContactCon = async (req,res)=>{
    let {name, email, message, created_at} = req.body
    res.json({employees:await insertContact(name, email, message, created_at)})
}

// const updateContactCon = async (req,res)=>{
    // console.log(req.params);

    // let {id}=req.params
    // let {name, email, message, created_at} = req.body
    // res.json({employees:await updateContact(name, email, message, created_at, id)})
// }

// const deleteContactCon = async(req,res)=>{
    // res.json({employees:await deleteContact(req.params.id)})
// }

export {getContactCon, getContactIdCon, insertContactCon} // deleteContactCon, updateContactCon}