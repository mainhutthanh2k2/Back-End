import Product from "../models/Product.js";

const homeController = {
    getProducts: async (req, res) => {
        try {
            const products = await Product.find();

            console.log({ query: req.query });

            return res.status(200).json({ status: 200, products });
        } catch (err) {
            console.log("Error: " + err);
            return res.status(400).json();
        }
    },
    postProduct: async (req, res) => {
        try {
            // const data = JSON.parse(req.body);
            const data = req.body.name;

            console.log({ body: data });
            return res.status(200).json({ body: data });
        } catch (err) {
            console.log("Error: " + err);
            return res.status(400).json();
        }
    },
};

export default homeController;
