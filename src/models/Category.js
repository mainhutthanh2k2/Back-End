import mongoose from "mongoose";
const { Schema } = mongoose;

const Category = new Schema({
    name: String,
    image: String,
    createAt: { type: Date, default: Date.now() },
    updateAt: { type: Date, default: Date.now() },
});

export default mongoose.model("Category", Category);
