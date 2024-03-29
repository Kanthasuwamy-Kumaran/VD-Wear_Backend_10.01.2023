import dotenv from 'dotenv'
import express from 'express'
import { notFound,errorHandler} from "./middleware/errorMiddleware.js";
import cookieParser from 'cookie-parser';
import dbConnect from "./utils/dbConnect.js";
const app = express();
dotenv.config();
const port =process.env.PORT

import userRoutes from "./routes/userRoutes.js"
import adminRoutes from "./routes/adminRoutes.js"

dbConnect()
app.use(express.json());
app.use(express.urlencoded( {extended: true }))
app.use(cookieParser())

app.use("/api/user",userRoutes)
app.use("/api/admin", adminRoutes);

app.get("/",(req,res) => res.send("server is ready"));

app.use(notFound)
app.use(errorHandler)

app.listen(port, () => {
    console.log(`Server Started at ${port}`)
}) 




