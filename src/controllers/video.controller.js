import mongoose from "mongoose";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { Video } from "../models/video.model.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const getAllVideo = asyncHandler(async (req, res) => {
  const { page = 1, limit = 10 } = req.query;

  let getAllVideo;

  const 

});

const publishVideo = asyncHandler(async (req, res) => {
  const { title, description } = req.body;

  console.log("title: ", title);

  if ([title, description].some((field) => field?.trim() === "")) {
    throw new ApiError(400, "All fields are required");
  }

  const videoLocalPath = req.files?.videoFile[0]?.path;
  const thumbLocalPath = req.files?.thumbnail[0]?.path;

  if (!videoLocalPath) {
    throw new ApiError(400, "Video file is missing");
  }
  if (!thumbLocalPath) {
    throw new ApiError(400, "thumbnail file is missing");
  }

  const videoFile = await uploadOnCloudinary(videoLocalPath);
  const thumbnail = await uploadOnCloudinary(thumbLocalPath);

  if (!(videoFile || thumbnail)) {
    throw new ApiError(400, "videofile or thumbnail are required");
  }

  const uploadVideo = await Video.create({
    title,
    description,
    videoFile: videoFile.url,
    thumbnail: thumbnail?.url,
    owner: req.user?._id,
    duration: videoFile.duration,
  });

  if (!uploadVideo) {
    throw new ApiError(500, "Something wrong creating Video");
  }

  return res
    .status(201)
    .json(new ApiResponse(200, uploadVideo, "Video uploaded successfully"));
});

export { publishVideo };
