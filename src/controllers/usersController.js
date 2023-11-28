import User from "../models/User.js";
import _ from "lodash";

const productController = {
    getUser: async (req, res) => {
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

            const users = await User.find(condition, null, option).sort(sort);

            if (!_.isEmpty(users)) {
                return res.status(200).json({ status: 0, users });
            } else {
                return res.status(200).json({ status: 2, message: "Cannot find users!" });
            }
        } catch (err) {
            console.log("Error: " + err);
            return res.status(400).json({ status: 1, err });
        }
    },
    addUser: async (req, res) => {
        try {
            const data = req.body;

            if (_.isEmpty(data)) {
                return res.status(200).json({ status: 3, message: "Data is empty!" });
            }

            if (Array.isArray(data)) {
                await User.insertMany(data);

                return res.status(200).json({ status: 0, message: "Insert user successfully!" });
            } else {
                return res.status(200).json({ status: 2, message: "The data sent is not in the correct format!" });
            }
        } catch (err) {
            console.log("Error: " + err);
            return res.status(400).json({ status: 1, err });
        }
    },
    updateUser: async (req, res) => {
        try {
            const data = req.body;

            if (_.isEmpty(data) || _.isEmpty(data.filter) || _.isEmpty(data.update)) {
                return res.status(200).json({ status: 3, message: "Data is empty!" });
            }

            const result = await User.updateOne(data.filter, { $set: data.update });

            if (result.modifiedCount == 0) return res.status(200).json({ status: 2, message: "Update user failed!" });

            return res.status(200).json({ status: 0, message: "Update user successfully!" });
        } catch (err) {
            console.log("Error: " + err);
            return res.status(400).json({ status: 1, err });
        }
    },
    deleteUser: async (req, res) => {
        try {
            const condition = req.query;

            if (_.isEmpty(condition)) return res.status(200).json({ status: 2, message: "Data is empty!" });

            const result = await User.deleteOne(condition);

            if (result.deletedCount == 0) return res.status(200).json({ status: 3, message: "Delete user failed!" });

            return res.status(200).json({ status: 0, message: "Delete user successfully!" });
        } catch (err) {
            console.log("Error: " + err);
            return res.status(400).json({ status: 1, err });
        }
    },
};

export default productController;
