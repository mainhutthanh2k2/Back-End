import mongoose from "mongoose";
const { Schema } = mongoose;

const Product = new Schema({
    name: String,
    price: Number,
    discount: Number,
    images: String,
    producer: String,
    inventory: Number,
    total_sold: Number,
    installment: Number,
    specifications: String,
    description: String,
    status: Number,
    createAt: { type: Date, default: Date.now() },
    updateAt: { type: Date, default: Date.now() },
});

export default mongoose.model("Product", Product);
