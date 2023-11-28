import productController from "../controllers/productController.js";

function initWebRoutes(app) {
    app.get("/product", productController.getProducts);
    app.post("/product", productController.addProduct);
    app.put("/product", productController.updateProduct);
    app.delete("/product", productController.deleteProduct);
}

export default initWebRoutes;
