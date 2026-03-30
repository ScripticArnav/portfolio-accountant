import mongoose from "mongoose"
import { DB_NAME } from "../constants.js"


const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(process.env.MONGODB_URI, {
            dbName: DB_NAME
        })

        console.log(`\n MoongoDB connected ! DB host: ${connectionInstance.connection.host}`);

    } catch (error) {
        console.log("MongoDB connetion error", error);
        // Don't crash the server if MongoDB is not reachable;
        // allow routes that don't depend on DB (like static JSON services) to keep working.
    }
}

export default connectDB