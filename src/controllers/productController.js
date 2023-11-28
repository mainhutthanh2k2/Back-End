import Product from "../models/Product.js";
import _ from "lodash";

const productController = {
    getProducts: async (req, res) => {
        try {
            const data = req.query,
                condition = {},
                option = {},
                sort = {};

            Object.keys(data).forEach((key) => {
                if (key === "limit") option[key] = data[key];
                else if (key === "asc" || key === "desc") sort[data[key]] = key;
                else condition[key] = data[key];
            });

            const products = await Product.find(condition, null, option).sort(sort);

            if (!_.isEmpty(products)) {
                return res.status(200).json({ status: 0, products });
            } else {
                return res.status(200).json({ status: 2, message: "Cannot find products!" });
            }
        } catch (err) {
            console.log("Error: " + err);
            return res.status(400).json({ status: 1, err });
        }
    },
    addProduct: async (req, res) => {
        try {
            const data = req.body;

            if (_.isEmpty(data)) {
                return res.status(200).json({ status: 3, message: "Data is empty!" });
            }

            if (Array.isArray(data)) {
                await Product.insertMany(data);

                return res.status(200).json({ status: 0, message: "Insert product successfully!" });
            } else {
                return res.status(200).json({ status: 2, message: "The data sent is not in the correct format!" });
            }
        } catch (err) {
            console.log("Error: " + err);
            return res.status(400).json({ status: 1, err });
        }
    },
    updateProduct: async (req, res) => {
        try {
            const data = req.body;

            if (_.isEmpty(data) || _.isEmpty(data.filter) || _.isEmpty(data.update)) {
                return res.status(200).json({ status: 3, message: "Data is empty!" });
            }

            const result = await Product.updateOne(data.filter, { $set: data.update });

            if (result.modifiedCount == 0)
                return res.status(200).json({ status: 2, message: "Update product failed!" });

            return res.status(200).json({ status: 0, message: "Update product successfully!" });
        } catch (err) {
            console.log("Error: " + err);
            return res.status(400).json({ status: 1, err });
        }
    },
    deleteProduct: async (req, res) => {
        try {
            const condition = req.query;

            if (_.isEmpty(condition)) return res.status(200).json({ status: 2, message: "Data is empty!" });

            const result = await Product.deleteOne(condition);

            if (result.deletedCount == 0) return res.status(200).json({ status: 2, message: "Delete product failed!" });

            return res.status(200).json({ status: 0, message: "Delete product successfully!" });
        } catch (err) {
            console.log("Error: " + err);
            return res.status(400).json({ status: 1, err });
        }
    },
};

export default productController;
