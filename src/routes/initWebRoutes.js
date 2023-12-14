import productController from "../controllers/productController.js";
import usersController from "../controllers/usersController.js";
import categoryController from "../controllers/categoryController.js";
import otpController from "../controllers/otpController.js";
import authController from "../controllers/authController.js";

import authMiddleware from "../middlewares/authMiddleware.js";

function initWebRoutes(app) {
  app.get("/", (req, res) => {
    res.send("Hello");
  });

  app.get("/product", productController.getProducts);
  app.post("/product", authMiddleware.verifyJWT, productController.addProduct);
  app.put(
    "/product",
    authMiddleware.verifyJWT,
    productController.updateProduct
  );
  app.delete(
    "/product",
    authMiddleware.verifyJWT,
    productController.deleteProduct
  );

  app.get("/user", authMiddleware.verifyAdminAutho, usersController.getUser);
  // app.get("/check-user-exists", authMiddleware.verifyAdminAutho, usersController.checkUserExists);
  app.post("/user", authMiddleware.verifyAdminAutho, usersController.addUser);
  app.put("/user", authMiddleware.verifyAdminAutho, usersController.updateUser);
  app.delete(
    "/user",
    authMiddleware.verifyAdminAutho,
    usersController.deleteUser
  );

  app.post("/sign-up", authController.SignUp);

  app.get(
    "/category",
    authMiddleware.verifyAdminAutho,
    categoryController.getCategory
  );
  app.post(
    "/category",
    authMiddleware.verifyAdminAutho,
    categoryController.addCategory
  );
  app.put(
    "/category",
    authMiddleware.verifyAdminAutho,
    categoryController.updateCategory
  );
  app.delete(
    "/category",
    authMiddleware.verifyAdminAutho,
    categoryController.deleteCategory
  );

  app.get("/send-email", otpController.sendEmail);
  app.get("/verify-otp", otpController.verifyOTP);

  // app.get("/verify-jwt", authMiddleware.verifyJWT);
  // app.get("/verify-auth-admin", authMiddleware.verifyAdminAutho);
}

export default initWebRoutes;
