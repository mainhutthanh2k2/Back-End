import mongoose from "mongoose";
const { Schema } = mongoose;

const User = new Schema({
    name: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
    },
    phone_number: {
        type: String,
        require: true,
        validate: [
            (text) =>
                text &&
                text.split("").every((char) => {
                    return char === "0" || +char;
                }),
            "This is not a valid phone number",
        ],
        minLength: 10,
        maxLength: 10,
    },
    avatar: {
        type: String,
    },
    role: {
        type: String,
        require: true,
        default: "R1",
        minLength: 2,
        maxLength: 2,
    },
    createAt: { type: Date, default: Date.now() },
    updateAt: { type: Date, default: Date.now() },
});

export default mongoose.model("User", User);
