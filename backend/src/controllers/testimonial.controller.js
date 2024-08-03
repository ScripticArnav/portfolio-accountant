import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { Testimonial } from "../models/testimonial.model.js";
import { ApiResponce } from "../utils/ApiResponse.js";

const createTestimonial = asyncHandler(async (req, res) => {
  const { name, review, rating } = req.body;
  if ([name, review, rating].some((field) => !field || field.trim() === "")) {
    throw new ApiError(401, "name, review, rating cannot be empty");
  }
  const rate = parseInt(rating);
  const testimonial = await Testimonial.create({
    name,
    review,
    rating: rate,
  });

  const rev = await Testimonial.findById(testimonial._id);

  if (!rev) {
    throw new ApiError(
      500,
      "Something went wrong while creating the user testimonial"
    );
  }

  return res
    .status(201)
    .json(new ApiResponce(201, rev, "Testimonial created successfully"));
});

const getTestimonials = asyncHandler(async (req, res) => {
  const testimonials = await Testimonial.find();
  return res
    .status(200)
    .json(
      ApiResponce(
        200,
        testimonials,
        "Fetched all the testimonials successfully"
      )
    );
});

const updateTestimonial = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { name, review, rating } = req.body;
  if ([name, review, rating].some((field) => !field || field.trim() === "")) {
    throw new ApiError(401, "name, review, rating cannot be empty");
  }
  const rate = parseInt(rating);
  const testimonial = await Testimonial.findByIdAndUpdate(
    id,
    {
      $set: {
        name,
        review,
        rating: rate,
      },
    },
    { new: true, runValidators: true }
  );
  if (!testimonial) {
    throw new ApiError(
      500,
      "Something wrong happened while updating the testimonial"
    );
  }
  return res
    .status(200)
    .json(new ApiResponce(200, testimonial, "Account details Updated"));
});

const deleteTestimonial = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const testimonial = await Testimonial.findByIdAndDelete(id);
  if (!testimonial) {
    throw new ApiError(404, "Testimonial not found");
  }

  return res
    .status(200)
    .json(
      new ApiResponce(200, testimonial, "Testimonial deleted successfully")
    );
});

export {
  createTestimonial,
  deleteTestimonial,
  updateTestimonial,
  getTestimonials,
};
