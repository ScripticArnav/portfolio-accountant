import { Service } from "../models/service.model";
import { ApiError } from "../utils/ApiError";
import { ApiResponce } from "../utils/ApiResponse";
import { asyncHandler } from "../utils/asyncHandler";
import { uploadOnCloudinary } from "../utils/cloudinary";

const createService = asyncHandler(async (req, res) => {
  const { title, description, price } = req.body;
  if (
    [title, description, price].some((field) => !field || field.trim() === "")
  ) {
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
    .json(ApiResponce(200, createdService, "Service created Successfully"));
});

const getServices = asyncHandler(async (req, res) => {
  const services = await Service.find();
  return res
    .status(200)
    .json(ApiResponce(200, services, "Fetched all the services successfully"));
});

const updateService = asyncHandler(async (req, res) => {
  const { serviceId } = req.params;
  const { title, description, price } = req.body;
  if (
    [title, description, price].some((field) => !field || field.trim() === "")
  ) {
    throw new ApiError(401, "Tilte, description or price cannot be empty");
  }
  const serviceCost = Number(price);
  const service = await Service.findByIdAndUpdate(
    serviceId,
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
    throw new ApiError(500, "Something went wrong while updating the service");
  }
  return res
    .status(200)
    .json(new ApiResponce(200, service, "Account details Updated"));
});

const deleteService = asyncHandler(async (req, res) => {
  const { serviceId } = req.params;
  const service = await Service.findByIdAndDelete(serviceId);
  if (!service) {
    throw new ApiError(404, "Service not found");
  }
  return res
    .status(200)
    .json(ApiResponce(200, null, "Service deleted successfully"));
});

export { createService, getServices, updateService, deleteService };
