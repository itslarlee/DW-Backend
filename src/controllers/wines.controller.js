import Wine from "../models/wines.model.js";

// Add a new wine
export const addWine = async (req, res) => {
    try {
        const newWine = new Wine(req.body);
        const savedWine = await newWine.save();
        res.status(201).json(savedWine);
    } catch (error) {
        res.status(400).send(error);
    }
};

// Get all wines
export const getWines = async (req, res) => {
    try {
        const wines = await Wine.find({});
        res.status(200).json(wines);
    } catch (error) {
        res.status(500).send(error);
    }
};

// Get a single wine by code
export const getWineByCode = async (req, res) => {
    try {
        const wine = await Wine.findOne({ code: req.params.code });
        if (!wine) {
            return res.status(404).send({ message: "Wine not found." });
        }
        res.status(200).json(wine);
    } catch (error) {
        res.status(500).send(error);
    }
};

// Update a wine by code
export const updateWine = async (req, res) => {
    try {
        const updatedWine = await Wine.findOneAndUpdate({ code: req.params.code }, req.body, { new: true });
        if (!updatedWine) {
            return res.status(404).send({ message: "Wine not found." });
        }
        res.status(200).json(updatedWine);
    } catch (error) {
        res.status(400).send(error);
    }
};

// Delete a wine by code
export const deleteWine = async (req, res) => {
    try {
        const result = await Wine.deleteOne({ code: req.params.code });
        if (result.deletedCount === 0) {
            return res.status(404).send({ message: "Wine not found." });
        }
        res.status(200).json({ message: "Wine successfully deleted." });
    } catch (error) {
        res.status(500).send(error);
    }
};
