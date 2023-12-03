import jwt from "jsonwebtoken";

const authMiddleware = {
    verifyJWT: async (req, res, next) => {
        try {
            const token = req.header("token");

            if (token) {
                jwt.verify(token, process.env.PRIVATE_KEY_JWT, { algorithm: "HS256" }, (err, user) => {
                    if (err) {
                        return res.status(401).json({ message: "Token is not valid!" });
                    } else {
                        req.user = user;
                        next();
                    }
                });
            } else {
                return res.status(401).json({ message: "You are not authenticated!" });
            }
        } catch (err) {
            console.log({ err });
            res.status(500).json({ err });
        }
    },
    verifyAdminAutho: async (req, res, next) => {
        authMiddleware.verifyJWT(req, res, () => {
            const user = req.user;

            if (user.role === "R0") {
                next();
            } else {
                return res.status(401).json({ message: "You are not authenticated!" });
            }
        });
    },
};

export default authMiddleware;
