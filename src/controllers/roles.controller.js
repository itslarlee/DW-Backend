import Role from "../models/roles.model.js";

export const addRole = async (req, res) => {
    try {
        const newRole = new Role(req.body);
        const savedRole = await newRole.save();
        res.status(201).json(savedRole);
    } catch (error) {
        res.status(400).send(error);
    }
};

export const getRoles = async (req, res) => {
    try {
        const roles = await Role.find({});
        res.status(200).json(roles);
    } catch (error) {
        res.status(500).send(error);
    }
};

export const updateRole = async (req, res) => {
    try {
        const updatedRole = await Role.findOneAndUpdate({ code: req.params.code }, req.body, { new: true });
        if (!updatedRole) {
            return res.status(404).send({ message: "Role not found." });
        }
        res.status(200).json(updatedRole);
    } catch (error) {
        res.status(400).send(error);
    }
};

export const deleteRole = async (req, res) => {
    try {
        const result = await Role.deleteOne({ code: req.params.code });
        if (result.deletedCount === 0) {
            return res.status(404).send({ message: "Role not found." });
        }
        res.status(200).json({ message: "Role successfully deleted." });
    } catch (error) {
        res.status(500).send(error);
    }
};
