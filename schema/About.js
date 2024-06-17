import { Schema, models, model } from "mongoose";
const userSchema = new Schema(
  {
    mainTitle: {
      type: String,
      required: [true, "Primary Title is required"],
    },
    para1: {
      type: String,
      required: [true, "paragraph1 is required"],
    },
  },
  { timestamps: true }
);

const About = models.about || model("about", userSchema);

export default About;
