import mongoose from "mongoose"

const db = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL)
    console.log("MongoDB connected successfully ✅")
  } catch (error) {
    console.log("Error failed to connect to MongoDB", error)
    process.exit(1)
  }
}

export default db