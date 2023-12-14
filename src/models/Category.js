import mongoose from "mongoose";
const { Schema } = mongoose;

const Category = new Schema({
  name: {
    type: String,
    require: true,
  },
  value: {
    type: String,
    require: true,
  },
  createAt: { type: Date, default: Date.now() },
  updateAt: { type: Date, default: Date.now() },
});

export default mongoose.model("Category", Category);
