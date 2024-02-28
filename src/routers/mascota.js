import express from "express";
import {
    addMascota,
    getMascotas,
    getMascotaByID,
    updateMascota,
    deleteMascota,
} from "../controllers/mascota.js";

const router = express.Router();

router.post("/", addMascota);
router.get("/", getMascotas);
router.get("/:mascotaId", getMascotaByID);
router.put("/:mascotaId", updateMascota);
router.delete("/:mascotaId", deleteMascota);

export default router;
