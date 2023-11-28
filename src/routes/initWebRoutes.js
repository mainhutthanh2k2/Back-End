import productController from "../controllers/productController.js";
import usersController from "../controllers/usersController.js";
import categoryController from "../controllers/categoryController.js";

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
}

export default initWebRoutes;
