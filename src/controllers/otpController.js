import _ from "lodash";
import Common from "../Common/Common.js";
import User from "../models/User.js";

let otpCode = null;

const otpController = {
    sendEmail: async (req, res) => {
        try {
            do {
                otpCode = Math.floor(Math.random() * 1000000);
            } while(!otpCode || otpCode >= 1000000)

            Common.sendEmail(req.query.email, otpCode).then(() => {
                return res.json({ status: 0, message: "Email sending successfully!" });
            }).catch((err) => {
                return res.json({ status: 1, message: "Email sending failed!" });
            });
        }catch(err) {
            return res.status(500).json({message: 'Get Error!'})
        }
    },
    verifyOTP: async (req, res) => {
        const { otp, email } = req.query;

        if (otp && email) {
            if (+otp === otpCode) {
                const user = await User.findOne({ email });

                if (!_.isEmpty(user)) {
                    const accessToken = await Common.signAccessToken(user.toJSON());

                    res.json({ status: 0, message: "Login successfully!", user, accessToken });
                } else {
                    res.json({ status: 1, message: "Email isn't used! Start signup" });
                }
            } else {
                res.json({ status: 3, message: "OTP is not correct" });
            }
        } else {
            res.json({ status: 2, message: "Missing parameter (otp, email)!" });
        }
    },
};

export default otpController;
