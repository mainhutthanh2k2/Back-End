import mongoose from "mongoose";
const { Schema } = mongoose;

const Order = new Schema({
    products_id: String,
    user_id: String,
    createAt: { type: Date, default: Date.now() },
    updateAt: { type: Date, default: Date.now() },
});

export default mongoose.model("Order", Order);
