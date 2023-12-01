import mongoose from "mongoose";
const { Schema } = mongoose;

const Category = new Schema({
    products_id: {
        type: String,
        require: true,
    },
    user_id: {
        type: String,
        require: true,
    },
    createAt: { type: Date, default: Date.now() },
    updateAt: { type: Date, default: Date.now() },
});

export default mongoose.model("Category", Category);
