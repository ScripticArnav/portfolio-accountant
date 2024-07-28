import { v2 as cloudinary } from "cloudinary";
import fs from "fs";
import { ApiError } from "./ApiError.js";
         
cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET
});

const uploadOnCloudinary = async (localFilePath) => {
    try {
        if(!localFilePath) return null;
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type:"auto"
        });
        // console.log("File has been uploaded on the cloudinary ", response.url);
        fs.unlinkSync(localFilePath);
        return response
    } catch (error) {
        fs.unlinkSync(localFilePath)
        // remove the locally saved temporary as the upload operation got failed
        return null;
    }
} 

const deleteFromCloudinary = async(localFilePath) => {
    try {
        if(!localFilePath){
            throw new ApiError(400, "Nothing on Cloudinary to be deleted")
        }
        await cloudinary.uploader.destroy(localFilePath);
    } catch (error) {
        throw new ApiError(400, "Failed to delete file from Cloudinary")
    }
}

export {uploadOnCloudinary, deleteFromCloudinary};