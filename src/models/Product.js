import mongoose from "mongoose";
const { Schema } = mongoose;

const Product = new Schema({
    name: {
        type: String,
        require: true,
    },
    price: {
        type: Number,
        require: true,
        min: 0,
    },
    discount: {
        type: Number,
        require: true,
        default: 0,
        min: 0,
    },
    images: {
        type: String,
        require: true,
        default: "",
    },
    inventory: {
        type: Number,
        require: true,
        default: 0,
        min: 0,
    },
    total_sold: {
        type: Number,
        require: true,
        default: 0,
        min: 0,
    },
    specifications: {
        type: String,
        require: true,
        default: "",
    },
    description: {
        type: String,
        require: true,
        default: "",
    },
    createAt: { type: Date, default: Date.now() },
    updateAt: { type: Date, default: Date.now() },
});

export default mongoose.model("Product", Product);
