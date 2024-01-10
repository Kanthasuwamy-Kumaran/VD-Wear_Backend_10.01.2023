import mongoose from "mongoose";

const dbConnect = () => {
  try {
    const mongoString = process.env.DATABASE_URL
    mongoose.connect(mongoString);
    const database = mongoose.connection
    
     database.once('connected', () => {
    console.log('Database Connected');
    // ${conn.connection.host}
})
  } catch (error) {
    console.log("Database Error");
  }
};
export default dbConnect;