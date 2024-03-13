import WineNationality from "../models/wineNationality.model.js";

export const addWineNationality = async (req, res) => {
    try {
        const newWineNationality = new WineNationality(req.body);
        const savedWineNationality = await newWineNationality.save();
        res.status(201).json(savedWineNationality);
    } catch (error) {
        res.status(400).send(error);
    }
};

export const getWineNationalities = async (req, res) => {
    try {
        const wineNationalities = await WineNationality.find({});
        res.status(200).json(wineNationalities);
    } catch (error) {
        res.status(500).send(error);
    }
};

export const updateWineNationality = async (req, res) => {
    try {
        const updatedWineNationality = await WineNationality.findOneAndUpdate({ code: req.params.code }, req.body, { new: true });
        if (!updatedWineNationality) {
            return res.status(404).send({ message: "Wine nationality not found." });
        }
        res.status(200).json(updatedWineNationality);
    } catch (error) {
        res.status(400).send(error);
    }
};

export const deleteWineNationality = async (req, res) => {
    try {
        const result = await WineNationality.deleteOne({ code: req.params.code });
        if (result.deletedCount === 0) {
            return res.status(404).send({ message: "Wine nationality not found." });
        }
        res.status(200).json({ message: "Wine nationality successfully deleted." });
    } catch (error) {
        res.status(500).send(error);
    }
};
