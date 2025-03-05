import express from 'express';
import {insertBookingCon,getBookingsCon} from '../controller/bookingsController.js';
const router = express.Router();

router.post('/', insertBookingCon);
router.get('/', getBookingsCon);

export default router;