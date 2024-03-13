import Consecutive from "../models/consecutive.model.js";

export const addConsecutive = async (req, res) => {
    try {
        const newConsecutive = new Consecutive(req.body);
        const savedConsecutive = await newConsecutive.save();
        res.status(201).json(savedConsecutive);
    } catch (error) {
        res.status(400).send(error);
    }
};

export const getConsecutives = async (req, res) => {
    try {
        const consecutives = await Consecutive.find({});
        res.status(200).json(consecutives);
    } catch (error) {
        res.status(500).send(error);
    }
};

export const updateConsecutive = async (req, res) => {
    try {
        const updatedConsecutive = await Consecutive.findOneAndUpdate({ code: req.params.code }, req.body, { new: true });
        if (!updatedConsecutive) {
            return res.status(404).send({ message: "Consecutive not found." });
        }
        res.status(200).json(updatedConsecutive);
    } catch (error) {
        res.status(400).send(error);
    }
};

export const deleteConsecutive = async (req, res) => {
    try {
        const result = await Consecutive.deleteOne({ code: req.params.code });
        if (result.deletedCount === 0) {
            return res.status(404).send({ message: "Consecutive not found." });
        }
        res.status(200).json({ message: "Consecutive successfully deleted." });
    } catch (error) {
        res.status(500).send(error);
    }
};
