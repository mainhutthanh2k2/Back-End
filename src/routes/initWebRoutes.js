import homeController from "../controllers/homeController.js";

function initWebRoutes(app) {
    app.get("/", homeController.getProducts);
    app.post("/", homeController.postProduct);
}

export default initWebRoutes;
