import mongoose from "mongoose";

async function connectDb() {
    try {
        await mongoose.connect(
            "mongodb+srv://lethaihihi:4lepTE7MC4TXZjcO@cluster0.aikvkzx.mongodb.net/e_commerce_app",
            { autoIndex: false }
        );
        console.log("Connect to Db success!");
    } catch (err) {
        console.log("Connect to Db faile!");
    }
}

export default connectDb;
