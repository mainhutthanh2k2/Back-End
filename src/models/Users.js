import mongoose from "mongoose";
const { Schema } = mongoose;

const User = new Schema({
    name: String,
    email: String,
    phone_number: String,
    avatar: String,
    role: String,
    createAt: { type: Date, default: Date.now() },
    updateAt: { type: Date, default: Date.now() },
});

export default mongoose.model("User", User);
