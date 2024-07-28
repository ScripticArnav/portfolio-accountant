import { Service } from "../models/service.model";
import { ApiError } from "../utils/ApiError";
import { ApiResponce } from "../utils/ApiResponse";
import { asyncHandler } from "../utils/asyncHandler";
import { uploadOnCloudinary } from "../utils/cloudinary";

const createService = asyncHandler(async (req, res) => {
  const { title, description, price } = req.body;
  if ([title, description, price].some((field) => field.trim() === "")) {
    throw new ApiError(401, "title, description, price cannot be empty");
  }
  const serviceCost = Number(price);
  const photoPath = req.files?.photo?.[0]?.path;

  if (!photoPath) {
    throw new ApiError(401, "No Photo found");
  }
  const photo = await uploadOnCloudinary(photoPath);
  const service = await Service.create({
    title,
    description,
    price: serviceCost,
    photo,
  });

  const createdService = await Service.findById(service._id);

  if (!createdService) {
    throw new ApiError(
      500,
      "Something went wrong while creating the user Service"
    );
  }

  return res
    .status(201)
    .json(ApiResponce(200, createService, "Service created Successfully"));
});

const getServices = asyncHandler(async (req, res) => {
  const services = await Service.find();
  return res
    .status(200)
    .json(ApiResponce(200, services, "Fetched all the services successfully"));
});

const updateService = asyncHandler(async (req, res) => {
  const { title, description, price } = req.body;
  if ([title, description, price].some((field) => field.trim() === "")) {
    throw new ApiError(401, "Tilte, description or price cannot be empty");
  }
  const serviceCost = Number(price);
  const service = await Service.findByIdAndUpdate(
    req.service?._id,
    {
      $set: {
        title,
        description,
        price: serviceCost,
      },
    },
    { new: true, runValidators: true }
  );
  if (!service) {
    throw new ApiError("Something wrong happened while updating the service");
  }
  return res
    .status(200)
    .json(new ApiResponce(200, service, "Account details Updated"));
});

const deleteService = asyncHandler(async (req, res) => {
  const { serviceID } = req.params;
  const service = Service.findByIdAndDelete(serviceID);
  if (!service) {
    throw new ApiError("Service not found");
  }
  return res
    .status(200)
    .json(new ApiResponce(200, service, "Service deleted successfully"));
});

export { createService, getServices, updateService, deleteService };
