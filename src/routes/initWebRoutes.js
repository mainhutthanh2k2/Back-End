import productController from "../controllers/productController.js";
import usersController from "../controllers/usersController.js";
import categoryController from "../controllers/categoryController.js";
import otpController from "../controllers/otpController.js";
import authController from "../controllers/authController.js";

import authMiddleware from "../middlewares/authMiddleware.js";

function initWebRoutes(app) {
    app.get("/product", productController.getProducts);
    app.post("/product", authMiddleware.verifyJWT, productController.addProduct);
    app.put("/product", authMiddleware.verifyJWT, productController.updateProduct);
    app.delete("/product", authMiddleware.verifyJWT, productController.deleteProduct);

    app.get("/user", authMiddleware.verifyJWT, usersController.getUser);
    app.get("/check-user-exists", authMiddleware.verifyJWT, usersController.checkUserExists);
    app.post("/user", authMiddleware.verifyJWT, usersController.addUser);
    app.put("/user", authMiddleware.verifyJWT, usersController.updateUser);
    app.delete("/user", authMiddleware.verifyJWT, usersController.deleteUser);

    app.post("/sign-up", authController.SignUp);

    app.get("/category", categoryController.getCategory);
    app.post("/category", categoryController.addCategory);
    app.put("/category", categoryController.updateCategory);
    app.delete("/category", categoryController.deleteCategory);

    app.get("/send-email", otpController.sendEmail);
    app.get("/verify-otp", otpController.verifyOTP);

    // app.get("/verify-jwt", authMiddleware.verifyJWT);
    // app.get("/verify-auth-admin", authMiddleware.verifyAdminAutho);
}

export default initWebRoutes;
