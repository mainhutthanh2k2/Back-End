import Category from "../models/Category.js";
import _ from "lodash";

const categoryController = {
    getCategory: async (req, res) => {
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

            const categories = await Category.find(condition, null, option).sort(sort);

            if (!_.isEmpty(categories)) {
                return res.status(200).json({ status: 0, categories });
            } else {
                return res.status(200).json({ status: 2, message: "Cannot find categories!" });
            }
        } catch (err) {
            console.log("Error: " + err);
            return res.status(400).json({ status: 1, err });
        }
    },
    addCategory: async (req, res) => {
        try {
            const data = req.body;

            if (_.isEmpty(data)) {
                return res.status(200).json({ status: 3, message: "Data is empty!" });
            }

            if (Array.isArray(data)) {
                await Category.insertMany(data);

                return res.status(200).json({ status: 0, message: "Insert category successfully!" });
            } else {
                return res.status(200).json({ status: 2, message: "The data sent is not in the correct format!" });
            }
        } catch (err) {
            console.log("Error: " + err);
            return res.status(400).json({ status: 1, err });
        }
    },
    updateCategory: async (req, res) => {
        try {
            const data = req.body;

            if (_.isEmpty(data) || _.isEmpty(data.filter) || _.isEmpty(data.update)) {
                return res.status(200).json({ status: 3, message: "Data is empty!" });
            }

            const result = await Category.updateOne(data.filter, { $set: data.update });

            if (result.modifiedCount == 0)
                return res.status(200).json({ status: 2, message: "Update category failed!" });

            return res.status(200).json({ status: 0, message: "Update category successfully!" });
        } catch (err) {
            console.log("Error: " + err);
            return res.status(400).json({ status: 1, err });
        }
    },
    deleteCategory: async (req, res) => {
        try {
            const condition = req.query;

            if (_.isEmpty(condition)) return res.status(200).json({ status: 2, message: "Data is empty!" });

            const result = await Category.deleteOne(condition);

            if (result.deletedCount == 0)
                return res.status(200).json({ status: 3, message: "Delete category failed!" });

            return res.status(200).json({ status: 0, message: "Delete category successfully!" });
        } catch (err) {
            console.log("Error: " + err);
            return res.status(400).json({ status: 1, err });
        }
    },
};

export default categoryController;
