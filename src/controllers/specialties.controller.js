import Specialty from "../models/specialties.model.js";

export const addSpecialty = async (req, res) => {
    try {
        const newSpecialty = new Specialty(req.body);
        const savedSpecialty = await newSpecialty.save();
        res.status(201).json(savedSpecialty);
    } catch (error) {
        res.status(400).send(error);
    }
};

export const getSpecialties = async (req, res) => {
    try {
        const specialties = await Specialty.find({});
        res.status(200).json(specialties);
    } catch (error) {
        res.status(500).send(error);
    }
};

export const updateSpecialty = async (req, res) => {
    try {
        const updatedSpecialty = await Specialty.findOneAndUpdate({ code: req.params.code }, req.body, { new: true });
        if (!updatedSpecialty) {
            return res.status(404).send({ message: "Specialty not found." });
        }
        res.status(200).json(updatedSpecialty);
    } catch (error) {
        res.status(400).send(error);
    }
};

export const deleteSpecialty = async (req, res) => {
    try {
        const result = await Specialty.deleteOne({ code: req.params.code });
        if (result.deletedCount === 0) {
            return res.status(404).send({ message: "Specialty not found." });
        }
        res.status(200).json({ message: "Specialty successfully deleted." });
    } catch (error) {
        res.status(500).send(error);
    }
};
