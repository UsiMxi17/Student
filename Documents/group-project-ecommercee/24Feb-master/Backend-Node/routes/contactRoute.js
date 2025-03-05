import express from "express";
import {getContactCon, insertContactCon} from "../controller/contactController.js";
const router = express.Router();

router.post('/contact', insertContactCon);
router.get('/contact-messages', getContactCon);

export default router;