import express from "express";
import {getContactCon, insertContactCon} from "../controller/contactController.js";
const router = express.Router();

router.post('/', insertContactCon);
router.get('/', getContactCon);

export default router;