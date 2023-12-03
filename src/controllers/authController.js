import User from "../models/User.js";
import _ from "lodash";
import Common from "../Common/Common.js";

const checkUserInfo = (data) => {
    const fieldsRequire = ["name", "email", "phone_number"];

    return fieldsRequire.every((key) => {
        return data[key];
    });
};

const userController = {
    SignUp: async (req, res) => {
        try {
            const data = req.body;

            console.log(data);

            if (_.isEmpty(data) && !checkUserInfo(data)) {
                return res.status(200).json({ status: 3, message: "Data is empty!" });
            }

            if (Array.isArray(data)) {
                const users = await User.insertMany(data);

                if (Array.isArray(users) && !_.isEmpty(users)) {
                    const accessToken = await Common.signAccessToken(users[0].toJSON());

                    return res
                        .status(200)
                        .json({ status: 0, message: "Sign up successfully!", user: users[0], accessToken });
                } else {
                    return res.status(200).json({ status: 3, message: "Sign up failed!" });
                }
            } else {
                return res.status(200).json({ status: 2, message: "The data sent is not in the correct format!" });
            }
        } catch (err) {
            console.log("Error: " + err);
            return res.status(400).json({ status: 1, err });
        }
    },
};

export default userController;
