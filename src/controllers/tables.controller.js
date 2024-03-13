import Table from "../models/tables.model.js";

export const addTable = async (req, res) => {
    try {
        const newTable = new Table(req.body);
        const savedTable = await newTable.save();
        res.status(201).json(savedTable);
    } catch (error) {
        res.status(400).send(error);
    }
};

export const getTables = async (req, res) => {
    try {
        const tables = await Table.find({});
        res.status(200).json(tables);
    } catch (error) {
        res.status(500).send(error);
    }
};

export const updateTable = async (req, res) => {
    try {
        const updatedTable = await Table.findOneAndUpdate({ code: req.params.code }, req.body, { new: true });
        if (!updatedTable) {
            return res.status(404).send({ message: "Table not found." });
        }
        res.status(200).json(updatedTable);
    } catch (error) {
        res.status(400).send(error);
    }
};

export const deleteTable = async (req, res) => {
    try {
        const result = await Table.deleteOne({ code: req.params.code });
        if (result.deletedCount === 0) {
            return res.status(404).send({ message: "Table not found." });
        }
        res.status(200).json({ message: "Table successfully deleted." });
    } catch (error) {
        res.status(500).send(error);
    }
};
