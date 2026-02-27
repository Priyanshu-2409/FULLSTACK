import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config()

const db = () => {
    mongoose
        .connect(process.env.MONGO_URL)
        .then(() => {
            console.log("Error connecting to MongoDb");
        })
        .catch((error) => {
            console.log("Error failed to connect to MongoDb")
        });
    }
export default db;