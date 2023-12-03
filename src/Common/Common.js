import nodemailer from "nodemailer";
import jwt from "jsonwebtoken";

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "lethaihihi11@gmail.com",
        pass: "rajk ssfb ucro bjtp",
    },
});

const Common = {
    sendEmail: async (email, otpCode) => {
        const info = await transporter.sendMail({
            from: '"FPT" lethaihihi11@gmail.com', // sender address
            to: email, // list of receivers
            subject: "Hello", // Subject line
            text: `Your verification OTP is ${otpCode}`, // plain text body
            html: `<p>Your verification OTP is <span style="color: blue">${otpCode}</span></p>`, // html body
        });

        console.log("Message sent: %s", info.messageId);
    },
    signAccessToken: async (data) => {
        let token = jwt.sign(data, process.env.PRIVATE_KEY_JWT, { algorithm: "HS256", expiresIn: "4h" });

        return token;
    },
};

export default Common;
