import User from "../models/users.model.js";

export const addUser = async (req, res) => {
    try {
        let newUser = new User(req.body);
        const user = await newUser.save();
        res.status(201).json(user);
    } catch (error) {
        res.status(400).send(error);
    }
};

export const getUsers = async (req, res) => {
    try {
        const users = await User.find({});
        res.status(200).json(users);
    } catch (error) {
        res.status(500).send(error);
    }
};

export const getUserByID = async (req, res) => {
    try {
        const user = await User.findById(req.params.userId);
        if (!user) {
            return res.status(404).send({ message: "Usuario no encontrado." });
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).send(error);
    }
};

export const updateUser = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.userId, req.body, { new: true });
        if (!user) {
            return res.status(404).send({ message: "Usuario no encontrado." });
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(400).send(error);
    }
};

export const deleteUser = async (req, res) => {
    try {
        const result = await User.deleteOne({ _id: req.params.userId });
        if (result.deletedCount === 0) {
            return res.status(404).send({ message: "Usuario no encontrado." });
        }
        res.status(200).json({ message: "Usuario eliminado exitosamente" });
    } catch (error) {
        res.status(500).send(error);
    }
};
