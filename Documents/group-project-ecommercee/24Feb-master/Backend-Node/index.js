import express from 'express'
import cors from 'cors'
import bodyParser from "body-parser"
import errorHandler from "./middleware/errorHandler.js";
import logger from "./middleware/logger.js";
// import authenticateJWT from '../Backend-Node/middleware/authMiddleware.js'
// import userRoute from './routes/userRoute.js';
// import paymentRoute from './routes/paymentRoute.js';
import bookingsRoutes from "./routes/bookingsRoute.js";
import contactRoutes from "./routes/contactRoute.js"

const PORT = process.env.PORT || 5000
const app = express()
app.use(cors({
    origin:'http://localhost:8080'
}))
app.use(express.json())
// path , imported file
app.use("/bookings", bookingsRoutes) 
app.use("/contacts", contactRoutes)
// app.use("/routes/userRoute.js", userRoute);
// app.use("/routes/paymentRoute.js", paymentRoute);

// app.get('/protected', authenticateJWT, (req, res) => {
    // res.json({ message: 'This is a protected route', user: req.user });
// });

app.listen(PORT,()=>{
console.log('http://localhost:'+ PORT);
})
