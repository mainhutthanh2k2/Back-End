import mongoose from "mongoose";
const { Schema } = mongoose;

const Product = new Schema({
    name: String,
    price: Number,
    createAt: { type: Date, default: Date.now() },
    updateAt: { type: Date, default: Date.now() },
});

export default mongoose.model("Product", Product);
