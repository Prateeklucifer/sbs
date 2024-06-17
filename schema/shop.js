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

const Shop = models.shop || model("shop", userSchema);

export default Shop;
