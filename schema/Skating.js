import { Schema, models, model } from "mongoose";
const userSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "title is required"],
    },
    description: {
      type: String,
      required: [true, "description is required"],
    },
  },
  { timestamps: true }
);

const Skating = models.skating || model("skating", userSchema);

export default Skating;
