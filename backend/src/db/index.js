import mongoose from "mongoose"
import { DB_NAME } from "../constants.js"


const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)

        console.log(`\n MoongoDB connected ! DB host: ${connectionInstance.connection.host}`);

    } catch (error) {
        console.log("MongoDB connetion error", error)
        process.exit(1)
    }
}

export default connectDB