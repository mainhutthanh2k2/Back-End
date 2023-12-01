import mongoose from "mongoose";
const { Schema } = mongoose;

const Product = new Schema({
    name: String,
    price: Number,
    discount: Number,
    images: Text,
    inventory: Number,
    total_sold: Number,
    specifications: Text,
    description: Text,
    createAt: { type: Date, default: Date.now() },
    updateAt: { type: Date, default: Date.now() },
});

export default mongoose.model("Product", Product);
