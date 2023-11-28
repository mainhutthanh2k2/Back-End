import productController from "../controllers/productController.js";
import usersController from "../controllers/usersController.js";

function initWebRoutes(app) {
    app.get("/product", productController.getProducts);
    app.post("/product", productController.addProduct);
    app.put("/product", productController.updateProduct);
    app.delete("/product", productController.deleteProduct);

    app.get("/user", usersController.getUser);
    app.post("/user", usersController.addUser);
    app.put("/user", usersController.updateUser);
    app.delete("/user", usersController.deleteUser);
}

export default initWebRoutes;
