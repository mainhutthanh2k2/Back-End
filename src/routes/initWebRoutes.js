import productController from "../controllers/productController.js";
import usersController from "../controllers/usersController.js";
import categoryController from "../controllers/categoryController.js";
import otpController from "../controllers/otpController.js";

function initWebRoutes(app) {
    app.get("/product", productController.getProducts);
    app.post("/product", productController.addProduct);
    app.put("/product", productController.updateProduct);
    app.delete("/product", productController.deleteProduct);

    app.get("/user", usersController.getUser);
    app.post("/user", usersController.addUser);
    app.put("/user", usersController.updateUser);
    app.delete("/user", usersController.deleteUser);

    app.get("/category", categoryController.getCategory);
    app.post("/category", categoryController.addCategory);
    app.put("/category", categoryController.updateCategory);
    app.delete("/category", categoryController.deleteCategory);

    app.get("/send-email", otpController.sendEmail);
    app.get("/verify-otp", otpController.verifyOTP);
}

export default initWebRoutes;
