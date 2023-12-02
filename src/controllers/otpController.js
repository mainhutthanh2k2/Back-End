import _ from "lodash";
import Common from "../Common/Common.js";

let otpCode = null;

const otpController = {
    sendEmail: async (req, res) => {
        otpCode = Math.floor(Math.random() * 1000000);

        Common.sendEmail(req.query.email, otpCode).catch((err) => {
            res.json({ status: 1, message: "Email sending failed!" });
        });

        res.json({ status: 0, message: "Email sending successfully!" });
    },
    verifyOTP: async (req, res) => {
        if (+req.query.otp === otpCode) {
            res.json({ status: 0, message: "OTP is correct" });
        } else {
            res.json({ status: 1, message: "OTP is not correct" });
        }
    },
};

export default otpController;
